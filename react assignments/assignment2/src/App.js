// src/App.js

import React from 'react';
import DoctorTable from './components/DoctorTable';

function App() {
  const doctors = [
    {
      doctorId: 1,
      doctorName: 'Dr. John Smith',
      designation: 'Cardiologist',
      experience: '10 years',
      contactNumber: '123-456-7890',
    },
    {
      doctorId: 2,
      doctorName: 'Dr. Sarah Johnson',
      designation: 'Pediatrician',
      experience: '8 years',
      contactNumber: '987-654-3210',
    },
    // Add more doctor objects as needed
  ];

  return (
    <div>
      <h1>Healthcare System</h1>
      <DoctorTable doctors={doctors} />
    </div>
  );
}

export default App;
