import pickle
import pandas as pd
import ast
import tensorflow as tf
from sklearn import linear_model
from tensorflow import keras
from tensorflow.keras import Sequential, layers, callbacks
from tensorflow.keras.layers import Dense, LSTM, Dropout, GRU, Bidirectional
import numpy as np
import matplotlib.pyplot as plt
import polars as pl
from sklearn.model_selection import train_test_split

def cross_entropy(X, y, w):
  return np.mean(np.log(1 + np.exp(-y * np.dot(X, w))))


def logistic_reg(X, y, w_init, max_its, eta, grad_threshold, lam, reg):
  assert reg in [1,2]
  iteration = 0
  w = w_init
  grads = []
  while iteration < max_its:
    denom = 1 + np.exp(y * np.dot(X, w))
    temp = (y / denom)
    temp = (y / denom)[:, np.newaxis] * X
    grad = -np.sum(temp, axis=0) / len(X)
    v = grad
    iteration += 1
    grads.append(v)
    abs_grad = np.abs(grad)
    if reg == 1:
      w_new = w - eta * v
      w = np.sign(w_new) * np.maximum(0, np.abs(w_new) - eta * lam)

    elif reg == 2:
      w =(1-2 *eta * lam) * w - eta * v
    if max(abs_grad) < grad_threshold:
      break

  return w, iteration,cross_entropy(X,y,w),grads

def sigmoid(x):
  return 1 / (1 + np.exp(-x))

def data_splitting(X_in,y_col,data):
    X = data.select(X_in).to_numpy()
    y = data.select([y_col]).to_numpy()
    y = y[~np.isnan(y)]
    X = X[len(X) - len(y):]
    y = y.reshape(len(X))
    return X,y

def logistic_alpha_models(x_cols, y_cols, data):
    dummy = data.drop('index')
    weight_columns = dummy.columns
    weights = []
    test_error = []
    for col in y_cols:
        X,y = data_splitting(x_cols, col , dummy)
        x_train, x_test = train_test_split(X)
        y_train, y_test = train_test_split(y)
        w, iteration,error,grads = logistic_reg(x_train, y_train, np.zeros(len(x_train[0])), 10**4, .1, 10**-4, .05, 1)
        Eout = cross_entropy(x_test, y_test,w)
        weights.append(w)
        test_error.append(Eout)
    return weight_columns, weights, test_error


def toRNNdata(x, y):
    rx_train = []
    ry_train = []
    steps = 20
    for i in range(steps, x.shape[0] - steps):
        rx_train.append(x[i - steps:i, :])
        ry_train.append(y[i])
    rx_train, ry_train = np.array(rx_train), np.array(ry_train)
    return rx_train, ry_train


def LSTMGRU(x_train, y_train):
    rx_train, ry_train = toRNNdata(x_train, y_train)

    epochs = 30
    model = Sequential()
    model.add(LSTM(units=50, return_sequences=True, input_shape=(rx_train.shape[1], rx_train.shape[2])))
    model.add(Dropout(0.2))
    model.add(LSTM(units=50, return_sequences=True))
    model.add(Dropout(0.2))
    model.add(GRU(units=50, return_sequences=True))
    model.add(Dropout(0.2))
    model.add(GRU(units=50))
    model.add(Dropout(0.2))
    model.add(Dense(units=1))
    model.compile(loss="mse", optimizer="adam")
    model.fit(rx_train, y_train[40:], batch_size=32, epochs=epochs, verbose=False)
    return model


def RNN_alpha_models(x_cols, y_cols, data):
    dummy = data.drop('index')
    weight_columns = dummy.columns
    weights = []
    test_error = []

    output = []

    rnns = []
    results = []
    for col in y_cols:
        X, y = data_splitting(x_cols, col, dummy)
        x_train, x_test = train_test_split(X)
        y_train, y_test = train_test_split(y)
        rnn = LSTMGRU(x_train, y_train)
        rx_test, ry_test = toRNNdata(x_test, y_test)
        results = rnn.evaluate(rx_test, ry_test, batch_size=32, verbose=False)
        rnns.append((rnn, results))
    return rnns

def Linear(x,y):
    clf = linear_model.LinearRegression()
    clf.fit(x,y)
    return clf

def Linear_alpha_models(x_cols,y_cols,data):
    dummy = data.drop('index')
    weight_columns = dummy.columns
    weights = []
    test_error = []
    for col in y_cols:
        X,y = data_splitting(x_cols, col , dummy)
        x_train, x_test = train_test_split(X)
        y_train, y_test = train_test_split(y)
        lin_model = Linear(x_train,y_train)
        yhat = lin_model.predict(x_test)
        weights.append(lin_model)
        test_error.append((np.square(np.subtract(y_test,yhat)).mean()))
    return weight_columns, weights, test_error
