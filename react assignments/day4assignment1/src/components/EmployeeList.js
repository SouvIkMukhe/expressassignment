import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
        const data = await response.json();
        setEmployees(data.data || []);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Employee Details</h2>
      <div className="row">
        {employees.map((employee) => (
          <div key={employee.id} className="col-md-4 mb-4">
            <div
              className={`card ${selectedEmployee === employee ? 'selected' : ''}`}
              onClick={() => handleEmployeeClick(employee)}
            >
              <div className="card-body">
                <h5 className="card-title">{employee.employee_name}</h5>
                {selectedEmployee === employee && (
                  <div>
                    <p className="card-text">ID: {employee.id}</p>
                    <p className="card-text">Salary: ${employee.employee_salary}</p>
                    <p className="card-text">Age: {employee.employee_age} years</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
