from contextlib import asynccontextmanager
from backend.plot_data import landing_data
from fastapi import FastAPI
from backend.database import init_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    # init_db()
    yield

app = FastAPI(lifespan=lifespan)

@app.get("/market-stats")
async def get_market_stats():
    # Fetch the data (could be from a database or a service)
    volume_data = landing_data('volume')
    liquidity_data = landing_data('liquidity')
    return volume_data, liquidity_data

@app.get("/")
def read_root():
    return "Hello: Welcome to the Trading Algorithm App"

