import { useEffect, useState } from "react";
import { api } from "../api";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");


  useEffect(() => {
    api.get("/employees/").then(res => setEmployees(res.data));
  }, []);

  const onSelectEmployee = async (emp) => {
    setSelectedEmployee(emp);
    setLoading(true);
    const res = await api.get(`/attendance/${emp.employeeId}`);
    setRecords(res.data);
    setLoading(false);
  };

  const markAttendance = async (form) => {
    await api.post("/attendance/", form);
    onSelectEmployee(selectedEmployee);
  };

  const sortedAttendance = [...records].sort((a, b) => {
    if (sortBy === "date") {
      const diff = new Date(a.date) - new Date(b.date);
      return sortOrder === "asc" ? diff : -diff;
    }
    if (sortBy === "status") {
      const cmp = a.status.localeCompare(b.status);
      return sortOrder === "asc" ? cmp : -cmp;
    }
    return 0;
  });


  return (
    <div className="container">
      <h2>Attendance Management</h2>

      {/* Employee Selector */}
      <div className="card">
        <label>Select Employee</label>
        <select
          onChange={(e) =>
            onSelectEmployee(
              employees.find(emp => emp.employeeId === e.target.value)
            )
          }
        >
          <option value="">-- Select Employee --</option>
          {employees.map(emp => (
            <option key={emp.employeeId} value={emp.employeeId}>
              {emp.name} ({emp.employeeId}) - {emp.department}
            </option>
          ))}
        </select>
      </div>

      {/* Employee Details */}
      {selectedEmployee && (
        <div className="card">
          <h3>Employee Details</h3>
          <p><b>Name:</b> {selectedEmployee.name}</p>
          <p><b>Employee ID:</b> {selectedEmployee.employeeId}</p>
          <p><b>Department:</b> {selectedEmployee.department}</p>
        </div>
      )}

      {/* Attendance Form */}
      {selectedEmployee && (
        <AttendanceForm
          employeeId={selectedEmployee.employeeId}
          onSubmit={markAttendance}
        />
      )}

      {/* Attendance Table */}
      {selectedEmployee && (
        loading
          ? <p>Loading attendance...</p>
          : (
            <>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                <label>Sort by:</label>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                  <option value="date">Date</option>
                  <option value="status">Status</option>
                </select>
                <button onClick={() => setSortOrder(o => o === "asc" ? "desc" : "asc")}>Order: {sortOrder === "asc" ? "Asc" : "Desc"}</button>
              </div>
              <AttendanceTable records={sortedAttendance} />
            </>
          )
      )}
    </div>
  );
}
