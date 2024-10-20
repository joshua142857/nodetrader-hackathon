from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from jose import JWTError, jwt
from datetime import datetime, timedelta
from databases import Database
import sqlalchemy
from sqlalchemy import create_engine, MetaData, Table, Column, String
from passlib.context import CryptContext

# Database setup
DATABASE_URL = "sqlite:///./emails.db"
database = Database(DATABASE_URL)
metadata = MetaData()

# Define a table for storing users and their passwords
users = Table(
    "users",
    metadata,
    Column("id", sqlalchemy.Integer, primary_key=True, index=True),
    Column("email", String, unique=True, index=True),
    Column("password", String),
)

# SQLAlchemy engine
engine = create_engine(DATABASE_URL)
metadata.create_all(bind=engine)

# FastAPI setup
app = FastAPI()

# Security
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
SECRET_KEY = "a1d93f03d7a7c8b3d5f5b6c5db94b0d9a9"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# User schema for registration and login
class User(BaseModel):
    email: str
    password: str

# User schema for responses
class UserInDB(User):
    hashed_password: str

# Token schema
class Token(BaseModel):
    access_token: str
    token_type: str

# User creation function (hashing password)
def create_user(email: str, password: str):
    hashed_password = pwd_context.hash(password)
    query = users.insert().values(email=email, password=hashed_password)
    database.execute(query)

# Get user by email
async def get_user_by_email(db, email: str):
    query = users.select().where(users.c.email == email)
    result = await db.fetch_one(query)
    return result

# Function to authenticate the user
async def authenticate_user(db, email: str, password: str):
    user = await get_user_by_email(db, email)
    if user and pwd_context.verify(password, user["password"]):
        return user
    return None

# Token generation logic
def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Login route (returns token)
@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Database = Depends(database.connect)):
    user = await authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": form_data.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

# Protected route
@app.get("/dashboard")
async def read_dashboard(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=403, detail="Not authenticated")
        return {"email": email}
    except JWTError:
        raise HTTPException(status_code=403, detail="Invalid token")
