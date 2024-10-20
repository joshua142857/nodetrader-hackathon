from backend.node_utils import logistic_alpha_models, RNN_alpha_models, Linear_alpha_models
import pandas as pd
import pickle

def load_data():
    # This function loads and preprocesses your data
    # You can replace this with whatever data loading function you are using
    with open('time_data.pickle', 'rb') as f:
        raw = pickle.load(f)
    return raw

def train_logistic_model(params):
    data = load_data()
    # Extract the necessary parameters
    x_cols = params.get("x_cols", [])
    y_cols = params.get("y_cols", [])
    model = logistic_alpha_models(x_cols, y_cols, data)
    return {"model": "logistic", "weights": model[1], "test_error": model[2]}

def train_rnn_model(params):
    data = load_data()
    x_cols = params.get("x_cols", [])
    y_cols = params.get("y_cols", [])
    model = RNN_alpha_models(x_cols, y_cols, data)
    return {"model": "rnn", "results": model}

def train_linear_model(params):
    data = load_data()
    x_cols = params.get("x_cols", [])
    y_cols = params.get("y_cols", [])
    model = Linear_alpha_models(x_cols, y_cols, data)
    return {"model": "linear", "weights": model[1], "test_error": model[2]}
