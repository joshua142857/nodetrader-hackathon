from contextlib import asynccontextmanager
from backend.plot_data import landing_data
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from backend.model_handlers import train_logistic_model, train_rnn_model, train_linear_model
from fastapi.middleware.cors import CORSMiddleware
from backend.database import init_db
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
from starlette.status import HTTP_422_UNPROCESSABLE_ENTITY

@asynccontextmanager
async def lifespan(app: FastAPI):
    # init_db()
    
    yield

app = FastAPI(lifespan=lifespan)

origins = ["http://localhost:5173", "http://localhost:5174"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Custom exception handler for RequestValidationError
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(
        status_code=HTTP_422_UNPROCESSABLE_ENTITY,
        content={"detail": exc.errors()},
        headers={"Access-Control-Allow-Origin": "*"},
    )

# Custom exception handler for HTTPException
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail},
        headers={"Access-Control-Allow-Origin": "*"},
    )


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
