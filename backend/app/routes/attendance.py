from fastapi import APIRouter
from datetime import datetime
from app.database import attendance_collection
from app.schemas import AttendanceCreate

router = APIRouter()

@router.post("/")
def mark_attendance(att: AttendanceCreate):
    record = att.dict()
    record["date"] = datetime.combine(record["date"], datetime.min.time())

    attendance_collection.insert_one(record)
    return {"message": "Attendance marked"}


@router.get("/{employee_id}")
def get_attendance(employee_id: str):
    return list(attendance_collection.find(
        {"employeeId": employee_id}, {"_id": 0}
    ))
