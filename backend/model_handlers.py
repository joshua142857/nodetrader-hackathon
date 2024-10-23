from backend.node_utils import logistic_alpha_models, RNN_alpha_models, Linear_alpha_models
import pandas as pd
from backend.ML import *
import pickle
import numpy as np

# def load_data():
#     # This function loads and preprocesses your data
#     # You can replace this with whatever data loading function you are using
#     with open('time_data.pickle', 'rb') as f:
#         raw = pickle.load(f)
#     return raw

import logging

# Set up basic logging
logging.basicConfig(level=logging.DEBUG)


def train_logistic_model(params):
    data, x_cols, y_cols = open_data()  # Get data, x_cols, y_cols

    logging.debug(f"x_cols: {x_cols}")
    logging.debug(f"y_cols: {y_cols}")

    
    model = logistic_alpha_models(x_cols, y_cols, data)

    # Convert NumPy arrays to lists before returning
    weights = [w.tolist() for w in model[1]] if isinstance(model[1], np.ndarray) else model[1]
    test_error = model[2]

    return {"model": "logistic", "weights": weights, "test_error": test_error}

def train_rnn_model(params):
    x_cols, y_cols, data = open_data()
    model = RNN_alpha_models(x_cols, y_cols, data)
    return {"model": "rnn", "results": model} #model[1]?

def train_linear_model(params):
    x_cols, y_cols, data = open_data()
    model = Linear_alpha_models(x_cols, y_cols, data)
    print("Model Results: ", model)
    return {"model": "linear", "weights": model[1], "test_error": model[2]}
