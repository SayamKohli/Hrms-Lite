import { useState } from "react";
import { validateAttendance } from "../utils/validators";

export default function AttendanceForm({ employeeId, onSubmit }) {
  const [form, setForm] = useState({
    date: "",
    status: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const payload = { ...form, employeeId };
    const validationErrors = validateAttendance(payload);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    onSubmit(payload);
    setForm({ date: "", status: "" });
  };

  return (
    <div className="card">
      <h3>Mark Attendance</h3>

      <input
        type="date"
        className={`input ${errors.date ? "input-error" : ""}`}
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      {errors.date && <div className="error-text">{errors.date}</div>}

      <select
        className={`input ${errors.status ? "input-error" : ""}`}
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="">Select Status</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
      {errors.status && <div className="error-text">{errors.status}</div>}

      <button onClick={handleSubmit}>Submit Attendance</button>
    </div>
  );
}
