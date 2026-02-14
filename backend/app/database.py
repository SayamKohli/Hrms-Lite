from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"))
db = client["hrms"]

employee_collection = db["employees"]
attendance_collection = db["attendance"]
