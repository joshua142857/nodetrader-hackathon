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
from backend.node_utils import *

def open_data():
    with open('time_data.pickle', 'rb') as f:
        raw = pickle.load(f)
    contract_lookup = dict([(contract['id'], contract) for contract, series in raw])
    d = dict([(contract['id'], float(contract['liquidity'])) for contract in contract_lookup.values() if
              float(contract['liquidity']) >= 100000])
    interested_ids = {k: v for k, v in sorted(d.items(), key=lambda item: item[1])}

    def in_range(v, l, h):
        if v < h and v > l:
            return True
        return False

    y_ids = [key for key in interested_ids.keys() if
             in_range([float(value) for value in ast.literal_eval(contract_lookup[key]['outcomePrices'])][0], .1, .9)][
            0:5]
    x_ids = [id for id in interested_ids.keys() if id not in y_ids]
    data = [(contract['id'], series['t'], series['p']) for contract, series in raw if
            contract['id'] in interested_ids.keys()]


    # Collect all the data into a list of dictionaries
    rows = []
    for row in data:
        col_name = row[0]
        indices = row[1]
        values = row[2]
        for idx, val in zip(indices, values):
            rows.append({'index': idx, 'column': col_name, 'value': val})

    # Create a DataFrame from the list of dictionaries
    df = pl.DataFrame(rows)

    # Pivot the DataFrame to get the desired format
    df = df.pivot(
        values='value',
        index='index',
        on='column',
        aggregate_function='first'  # or 'sum', 'mean', etc., depending on your needs
    )
    df = df.fill_null(strategy="forward")
    return df, x_ids, y_ids
    # display(df,df)
    # model1 = logistic_alpha_models(x_ids, y_ids, df)
    # model2 = RNN_alpha_models(x_ids, y_ids, df)
    # model3 = Linear_alpha_models(x_ids, y_ids, df)
    # return model1, model2, model3