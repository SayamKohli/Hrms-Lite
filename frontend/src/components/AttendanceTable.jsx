export default function AttendanceTable({ records }) {
  if (records.length === 0) {
    return <p>No attendance records found.</p>;
  }

  return (
    <div className="card">
      <h3>Attendance Records</h3>
      <table width="100%" cellPadding="8">
        <thead>
          <tr style={{ background: "#f1f5f9" }}>
            <th align="left">Date</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, idx) => (
            <tr key={idx}>
              <td>{new Date(rec.date).toLocaleDateString()}</td>
              <td>{rec.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
