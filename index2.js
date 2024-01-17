const express = require('express');
const app = express();
const port = 3002;

// Styles for better readability
const styles = `
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  h1 {
    color: #4caf50;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  label {
    margin-bottom: 8px;
  }
  input {
    margin-bottom: 16px;
    padding: 8px;
  }
  button {
    padding: 8px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 8px;
  }
`;

// Serve a page displaying employee details
app.get('/employee', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Employee Details</title>
        <style>${styles}</style>
      </head>
      <body>
        <h1>Employee Details</h1>
        <form action="/employee" method="get">
          <label for="employeeId">Employee Id:</label>
          <input type="text" id="employeeId" name="employeeId" required>

          <label for="employeeName">Employee Name:</label>
          <input type="text" id="employeeName" name="employeeName" required>

          <label for="employeeJob">Employee Job:</label>
          <input type="text" id="employeeJob" name="employeeJob" required>

          <label for="employeeDeptno">Employee Deptno:</label>
          <input type="text" id="employeeDeptno" name="employeeDeptno" required>

          <label for="employeeEmailId">Employee EmailId:</label>
          <input type="text" id="employeeEmailId" name="employeeEmailId" required>

          <button type="submit">OK</button>
        </form>

        <!-- Display employee details -->
        <ul>
          <li>Employee Id : ${req.query.employeeId || ''}</li>
          <li>Employee Name : ${req.query.employeeName || ''}</li>
          <li>Employee Job : ${req.query.employeeJob || ''}</li>
          <li>Employee Deptno : ${req.query.employeeDeptno || ''}</li>
          <li>Employee EmailId : ${req.query.employeeEmailId || ''}</li>
        </ul>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/employee`);
});
