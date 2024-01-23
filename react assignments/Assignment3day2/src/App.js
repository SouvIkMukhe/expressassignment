// src/App.js
import React, { useState } from "react";
import EmployeeCRUD from "./components/EmployeeCRUD/EmployeeCRUD";

function App() {
  const [employees, setEmployees] = useState([
    { empno: 1, ename: "John Doe", job: "Developer", sal: 50000, deptno: 10 },
    { empno: 2, ename: "Jane Smith", job: "Designer", sal: 60000, deptno: 20 },
    { empno: 3, ename: "John Wick", job: "Assassin", sal: 90000, deptno: 300 },
    // Add more employees as needed
  ]);

  const handleUpdate = (index, updatedData) => {
    setEmployees((prevEmployees) => {
      const newEmployees = [...prevEmployees];
      newEmployees[index] = updatedData;
      return newEmployees;
    });
  };

  const handleAdd = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleDelete = (index) => {
    setEmployees((prevEmployees) => {
      const newEmployees = [...prevEmployees];
      newEmployees.splice(index, 1);
      return newEmployees;
    });
  };

  return (
    <div className="App">
      <EmployeeCRUD employees={employees} onUpdate={handleUpdate} onDelete={handleDelete} onAdd={handleAdd} />
    </div>
  );
}

export default App;
