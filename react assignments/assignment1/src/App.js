// src/App.js

import React from 'react';
import SingleStudent from './components/SingleStudent';

function App() {
  const studentDetails = {
    sid: 1,
    sname: 'John Cena',
    course: 'Computer Science',
    age: 20,
    total: 95,
  };

  return (
    <div className="App">
      <h1>Student Information System</h1>
      <SingleStudent studentDetails={studentDetails} />
    </div>
  );
}

export default App;
