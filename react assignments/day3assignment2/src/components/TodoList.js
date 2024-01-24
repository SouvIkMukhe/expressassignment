// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} index={index} task={task} removeTask={removeTask} />
      ))}
    </ul>
  );
};

export default TodoList;
