// client/src/components/EmployeeList.js
import React from 'react';

const EmployeeList = () => {
  // Hardcoded list of employees (you can fetch from the server later)
  const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bruce Wayne'},
    { id: 4, name: 'Batman' },
    { id: 5, name: 'RasAlGul' },
    { id: 6, name: 'Joker' },
    { id: 7, name: 'John cena' },
    // Add more employees as needed
  ];

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
