import { useEffect, useState } from "react";
import { api } from "../api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employeeId: "",
    name: "",
    email: "",
    department: "",
  });
  const [sortBy, setSortBy] = useState("employeeId"); 


  const loadEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const addEmployee = async () => {
    try {
      await api.post("/employees/", form);
      setForm({ employeeId: "", name: "", email: "", department: "" });
      loadEmployees();
    } catch (err) {
      alert(err.response?.data?.detail || "Failed to add employee");
    }
  };

      
      const sortedEmployees = [...employees].sort((a, b) => {
  if (sortBy === "employeeId") {
    return a.employeeId.localeCompare(b.employeeId);
  }
  if (sortBy === "name") {
    return a.name.localeCompare(b.name);
  }
  return 0;
});

  const deleteEmployee = async (id) => {
    await api.delete(`/employees/${id}`);
    loadEmployees();
  };

  return (
    <div className="container">
      <EmployeeForm form={form} setForm={setForm} onSubmit={addEmployee} />
      <EmployeeTable employees={sortedEmployees} onDelete={deleteEmployee} />

    </div>
  );
}
