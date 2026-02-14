from pydantic import BaseModel, EmailStr
from datetime import date
from typing import Literal

class EmployeeCreate(BaseModel):
    employeeId: str
    name: str
    email: EmailStr
    department: str

class AttendanceCreate(BaseModel):
    employeeId: str
    date: date
    status: Literal["Present", "Absent"]
