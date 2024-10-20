import requests
import json
import asyncio
import time
import datetime
import numpy as np
import pandas as pd
import polars as pl
import matplotlib.pyplot as plt
import ast
from datetime import datetime, timedelta
import math

def landing_data(name):
    params = {'closed': 'False',
              'limit':2,
              'ascending': False,
              'order':name}

    r = requests.get("https://gamma-api.polymarket.com/events", params = params)
    if r.status_code == 200:
        markets =  r.json()
    else:
        print('oh no')
        return
    return [(market['title'], market[name]) for market in markets]

#liquidity, volume
