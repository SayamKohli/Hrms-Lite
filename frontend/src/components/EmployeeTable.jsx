export default function EmployeeTable({ employees, onDelete }) {
  return (
    <div className="card">
      <h3>Employee Directory</h3>

      {employees.length === 0 && (
        <p>No employees found</p>
      )}

      {employees.length > 0 && (
        <table width="100%" cellPadding="8">
          <thead>
            <tr style={{ background: "#f1f5f9" }}>
              <th align="left">Employee ID</th>
              <th align="left">Name</th>
              <th align="left">Email</th>
              <th align="left">Department</th>
              <th align="left">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.employeeId}>
                <td><b>{emp.employeeId}</b></td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => onDelete(emp.employeeId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
