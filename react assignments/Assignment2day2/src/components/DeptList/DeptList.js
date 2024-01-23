// src/components/DeptList/DeptList.js
import React, { useState } from "react";
import "./DeptList.css";

function DeptList() {
  const [deptsArray, setDeptsArray] = useState([]);
  const [deptno, setDeptno] = useState("");
  const [dname, setDname] = useState("");
  const [loc, setLoc] = useState("");
  const [editingDeptno, setEditingDeptno] = useState(null);

  function getDeptsButton_click() {
    let tempArray = [
      { deptno: 10, dname: "Accounts", loc: "Hyd" },
      { deptno: 20, dname: "Sales", loc: "Pune" },
      { deptno: 30, dname: "Marketing", loc: "Hyd" },
      { deptno: 40, dname: "Operations", loc: "Chennai" },
    ];

    setDeptsArray(tempArray);
  }

  function addDeptButton_click() {
    let tempArray = [...deptsArray];

    let deptObj = {};
    deptObj.deptno = deptno;
    deptObj.dname = dname;
    deptObj.loc = loc;
    tempArray.push(deptObj);

    setDeptsArray(tempArray);

    setDeptno("");
    setDname("");
    setLoc("");
  }

  function deleteDept_click(dno) {
    let tempArray = [...deptsArray];
    let index = tempArray.findIndex((item) => item.deptno === dno);
    tempArray.splice(index, 1);
    setDeptsArray(tempArray);

    // Clear the editing state if the deleted department was being edited
    if (editingDeptno === dno) {
      setEditingDeptno(null);
    }
  }

  function updateDeptButton_click(dno) {
    let tempArray = [...deptsArray];
    let index = tempArray.findIndex((item) => item.deptno === dno);

    if (index !== -1) {
      // Update the department values based on the editing state
      tempArray[index].deptno = deptno;
      tempArray[index].dname = dname;
      tempArray[index].loc = loc;

      setDeptsArray(tempArray);
      setEditingDeptno(null); // Clear editing state after update
    }
  }

  function startEdit(dno) {
    // Set editing state when clicking on the edit button
    setEditingDeptno(dno);

    // Retrieve the department values for editing
    let department = deptsArray.find((item) => item.deptno === dno);
    setDeptno(department.deptno);
    setDname(department.dname);
    setLoc(department.loc);
  }

  let resultArray2 = deptsArray.map((item) => {
    const isEditing = editingDeptno === item.deptno;

    return (
      <tr key={item.deptno}>
        <td>
          {isEditing ? (
            <input
              type="text"
              value={deptno}
              onChange={(e) => setDeptno(e.target.value)}
            />
          ) : (
            item.deptno
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="text"
              value={dname}
              onChange={(e) => setDname(e.target.value)}
            />
          ) : (
            item.dname
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="text"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
            />
          ) : (
            item.loc
          )}
        </td>
        <td>
          {isEditing ? (
            <button onClick={() => updateDeptButton_click(item.deptno)}>
              Update
            </button>
          ) : (
            <>
              <a
                href="javascript:void(0);"
                onClick={() => deleteDept_click(item.deptno)}
              >
                Delete
              </a>
              <span> | </span>
              <a href="javascript:void(0);" onClick={() => startEdit(item.deptno)}>
                Edit
              </a>
            </>
          )}
        </td>
      </tr>
    );
  });

  return (
    <>
      <h3>Working with State -- CRUD Operations on Array of Objects</h3>
      <hr />

      <input
        type="text"
        placeholder="Dept Number"
        value={deptno}
        onChange={(e) => setDeptno(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dept Name"
        value={dname}
        onChange={(e) => setDname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dept Location"
        value={loc}
        onChange={(e) => setLoc(e.target.value)}
      />
      <hr />
      <input
        type="button"
        onClick={getDeptsButton_click}
        value="Get Depts"
      />
      {editingDeptno === null ? (
        <input
          type="button"
          onClick={addDeptButton_click}
          value="Add Dept"
        />
      ) : null}
      <hr />

      <table border="2" width="400" cellSpacing="0" cellPadding="5">
        <thead>
          <tr>
            <th>Dept Number</th>
            <th>Dept Name</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{resultArray2}</tbody>
      </table>
    </>
  );
}

export default DeptList;
