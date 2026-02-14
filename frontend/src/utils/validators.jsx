export function validateEmployee(form) {
  const errors = {};

  // Employee ID
  if (!form.employeeId || !form.employeeId.trim()) {
    errors.employeeId = "Employee ID is required";
  } else if (!/^[A-Z0-9_-]{3,20}$/i.test(form.employeeId)) {
    errors.employeeId = "Employee ID must be 3–20 characters (A-Z, 0-9)";
  }

  // Name
  if (!form.name || !form.name.trim()) {
    errors.name = "Full name is required";
  } else if (form.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Email
  if (!form.email || !form.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  ) {
    errors.email = "Invalid email format";
  }

  // Department
  if (!form.department || !form.department.trim()) {
    errors.department = "Department is required";
  }

  return errors;
}

export function validateAttendance(form) {
  const errors = {};

  if (!form.employeeId?.trim()) {
    errors.employeeId = "Employee ID is required";
  }

  if (!form.date) {
    errors.date = "Date is required";
  }

  if (!form.status) {
    errors.status = "Status is required";
  }

  return errors;
}
