const express = require('express');
const app = express();
const port = 3002;

// Serve a page displaying employee details
app.get('/employee', (req, res) => {
  const employeeDetails = {
    employeeId: 2586668,
    employeeName: 'Souvik Mukherjee',
    employeeJob: 'Software engineer',
    employeeDeptno: 10,
    employeeEmailId: 'svk2@gmail.com'
  };

  res.send(`
    <html>
      <head>
        <title>Employee Details</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0; 
          }
          header {
            background-color: #5C6167; 
            padding: 20px;
            text-align: center;
            color: white;
          }
          footer {
            background-color: #4caf50; 
            padding: 10px;
            text-align: center;
            color: white;
            position: fixed;
            bottom: 0;
            width: 100%;
          }
          h1 {
            color: #4caf50;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin-bottom: 8px;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Employee Details</h1>
        </header>
        <ul>
          <li>Employee Id : ${employeeDetails.employeeId}</li>
          <li>Employee Name : ${employeeDetails.employeeName}</li>
          <li>Employee Job : ${employeeDetails.employeeJob}</li>
          <li>Employee Deptno : ${employeeDetails.employeeDeptno}</li>
          <li>Employee EmailId : ${employeeDetails.employeeEmailId}</li>
        </ul>
        <footer>
          <p>© 2024 Employee Management System</p>
        </footer>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/employee`);
});
