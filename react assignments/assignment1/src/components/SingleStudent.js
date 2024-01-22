// SingleStudent.js

import React from 'react';

const SingleStudent = ({ studentDetails }) => {
  const { sid, sname, course, age, total } = studentDetails;

  return (
    <div>
      <h2>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Age</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sid}</td>
            <td>{sname}</td>
            <td>{course}</td>
            <td>{age}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleStudent;
