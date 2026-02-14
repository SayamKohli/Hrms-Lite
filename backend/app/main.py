from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import employee, attendance

app = FastAPI(title="HRMS Lite")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://hrms-lite-ashy.vercel.app", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(employee.router, prefix="/api/employees")
app.include_router(attendance.router, prefix="/api/attendance")

@app.get("/")
def health():
    return {"status": "Running"}
