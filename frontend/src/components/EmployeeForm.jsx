import { useState } from "react";
import { validateEmployee } from "../utils/validators";

export default function EmployeeForm({ form = {}, setForm, onSubmit }) {
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = validateEmployee(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;
    onSubmit();
  };

  const getInputClass = (field) =>
    `input ${errors[field] ? "input-error" : ""}`;

  return (
    <div className="card">
      <h3>Add Employee</h3>

      {/* Employee ID */}
      <input
        className={getInputClass("employeeId")}
        placeholder="Employee ID"
        value={form.employeeId || ""}
        onChange={(e) =>
          setForm({ ...form, employeeId: e.target.value })}
      />
      {errors.employeeId && (
        <div className="error-text">{errors.employeeId}</div>
      )}

      {/* Name */}
      <input
        className={getInputClass("name")}
        placeholder="Full Name"
        value={form.name || ""}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })}
      />
      {errors.name && (
        <div className="error-text">{errors.name}</div>
      )}

      {/* Email */}
      <input
        className={getInputClass("email")}
        placeholder="Email"
        value={form.email || ""}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })}
      />
      {errors.email && (
        <div className="error-text">{errors.email}</div>
      )}

      {/* Department */}
      <input
        className={getInputClass("department")}
        placeholder="Department"
        value={form.department || ""}
        onChange={(e) =>
          setForm({ ...form, department: e.target.value })}
      />
      {errors.department && (
        <div className="error-text">{errors.department}</div>
      )}

      <button onClick={handleSubmit}>Add Employee</button>
    </div>
  );
}
