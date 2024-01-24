// src/components/TodoItem.js
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './TodoItem.css'; // Import a separate CSS file for styling

const TodoItem = ({ index, task, removeTask }) => {
  return (
    <li className="todo-item">
      <span className="task">{task}</span>
      <button className="delete-button" onClick={() => removeTask(index)}>
        <FaTrash />
      </button>
    </li>
  );
};

export default TodoItem;
