// src/App.js
import React from 'react';
import EmployeeTable from './components/EmployeeTable';

const App = () => {
  const employees = [
    { id: 1, name: 'John Wick', position: 'Software Developer', salary: 70000 },
    { id: 2, name: 'Windows', position: 'UX Designer', salary: 60000 },
    { id: 3, name: 'OnePlus', position: 'Project Manager', salary: 80000 },
    { id: 4  , name: 'Newly', position: ' Manager', salary: 8000 },
  ];

  return (
    <div>
      <h1>Employee Management App</h1>
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default App;
