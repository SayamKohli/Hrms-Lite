from fastapi import APIRouter, HTTPException
from app.database import employee_collection
from app.schemas import EmployeeCreate

router = APIRouter()

# GET ALL EMPLOYEES
@router.get("/")
def get_employees():
    employees = list(employee_collection.find({}, {"_id": 0}))
    return employees


# CREATE EMPLOYEE
@router.post("/")
def create_employee(emp: EmployeeCreate):

    if employee_collection.find_one({"employeeId": emp.employeeId}):
        raise HTTPException(
            status_code=409,
            detail="Employee ID already exists"
        )

    if employee_collection.find_one({"email": emp.email}):
        raise HTTPException(
            status_code=409,
            detail="Email already exists"
        )

    employee_collection.insert_one(emp.dict())
    return {"message": "Employee created successfully"}


# DELETE EMPLOYEE
@router.delete("/{employee_id}")
def delete_employee(employee_id: str):
    result = employee_collection.delete_one(
        {"employeeId": employee_id}
    )

    if result.deleted_count == 0:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    return {"message": "Employee deleted"}
