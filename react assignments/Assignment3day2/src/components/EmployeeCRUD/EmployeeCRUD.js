// src/components/EmployeeCRUD/EmployeeCRUD.js
import React, { useState } from "react";
import "./EmployeeCRUD.css";

function EmployeeCRUD({ employees, onUpdate, onDelete, onAdd }) {
  const [editMode, setEditMode] = useState(null);
  const [editedData, setEditedData] = useState({ empno: "", ename: "", job: "", sal: "", deptno: "" });

  const handleEdit = (empIndex) => {
    setEditMode(empIndex);
    setEditedData(employees[empIndex]);
  };

  const handleSave = () => {
    // Perform save operation (e.g., update the data in the database)
    // In this example, we'll just log the edited data to the console
    console.log("Edited Data:", editedData);

    if (editMode !== null) {
      onUpdate(editMode, editedData);
      setEditMode(null);
    } else {
      onAdd(editedData);
      setEditedData({ empno: "", ename: "", job: "", sal: "", deptno: "" });
    }
  };

  const handleDelete = (empIndex) => {
    onDelete(empIndex);
    setEditMode(null);
  };

  const handleInputChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="employee-crud-container">
      <h3>Employee List</h3>
      <table>
        <thead>
          <tr>
            <th>Employee Number</th>
            <th>Name</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Department Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.empno}</td>
              <td>{editMode === index ? <input type="text" value={editedData.ename} onChange={(e) => handleInputChange("ename", e.target.value)} /> : employee.ename}</td>
              <td>{editMode === index ? <input type="text" value={editedData.job} onChange={(e) => handleInputChange("job", e.target.value)} /> : employee.job}</td>
              <td>{editMode === index ? <input type="text" value={editedData.sal} onChange={(e) => handleInputChange("sal", e.target.value)} /> : employee.sal}</td>
              <td>{editMode === index ? <input type="text" value={editedData.deptno} onChange={(e) => handleInputChange("deptno", e.target.value)} /> : employee.deptno}</td>
              <td>
                {editMode === index ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editMode === null && (
        <>
          <h3>Add Employee</h3>
          <div>
            <label>
              Employee Number:
              <input type="text" value={editedData.empno} onChange={(e) => handleInputChange("empno", e.target.value)} />
            </label>
            <label>
              Name:
              <input type="text" value={editedData.ename} onChange={(e) => handleInputChange("ename", e.target.value)} />
            </label>
            <label>
              Job:
              <input type="text" value={editedData.job} onChange={(e) => handleInputChange("job", e.target.value)} />
            </label>
            <label>
              Salary:
              <input type="text" value={editedData.sal} onChange={(e) => handleInputChange("sal", e.target.value)} />
            </label>
            <label>
              Department Number:
              <input type="text" value={editedData.deptno} onChange={(e) => handleInputChange("deptno", e.target.value)} />
            </label>
            <button onClick={handleSave}>Add</button>
          </div>
        </>
      )}
    </div>
  );
}

export default EmployeeCRUD;
