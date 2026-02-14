import { useState } from "react";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("employees");

  return (
    <>
      <div className="container">
        <button onClick={() => setPage("employees")}>Employees</button>
        <button onClick={() => setPage("attendance")}>Attendance</button>
      </div>

      {page === "employees" && <Employees />}
      {page === "attendance" && <Attendance />}
    </>
  );
}
