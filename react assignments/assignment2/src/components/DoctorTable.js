// src/components/DoctorTable.js

import React from 'react';
import '../styles/styles.css'; // Adjusted import path

const DoctorTable = ({ doctors }) => {
  return (
    <div className="container">
      <h2>Doctor Details</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Doctor Name</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doctorId}>
              <td>{doctor.doctorId}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.designation}</td>
              <td>{doctor.experience}</td>
              <td>{doctor.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;
