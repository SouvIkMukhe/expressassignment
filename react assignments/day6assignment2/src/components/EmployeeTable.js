// src/components/EmployeeTable.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

const EmployeeTable = ({ employees }) => {
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          {Object.keys(employees[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            {Object.values(employee).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
