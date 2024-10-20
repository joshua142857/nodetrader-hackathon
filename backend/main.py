from contextlib import asynccontextmanager
from backend.plot_data import landing_data
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from backend.model_handlers import train_logistic_model, train_rnn_model, train_linear_model
from backend.database import init_db
from fastapi.middleware.cors import CORSMiddleware

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

class TrainModelRequest(BaseModel):
    model_type: str
    parameters: dict

@app.post("/train")
async def train_model(request: TrainModelRequest):
    model_type = request.model_type.lower()
    params = request.parameters

    if model_type == "logistic":
        results = train_logistic_model(params)
    elif model_type == "rnn":
        results = train_rnn_model(params)
    elif model_type == "linear":
        results = train_linear_model(params)
    else:
        raise HTTPException(status_code=400, detail="Invalid model type")

    return {"status": "success", "results": results}


#middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
 # You can set specific origins instead of "*"
    allow_credentials=True,
    allow_methods=["*"],  # Or specify allowed methods like ["GET", "POST"]
    allow_headers=["*"],  # Or specify allowed headers like ["Content-Type"]
)