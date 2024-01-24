// src/App.js
import React from 'react';
import './App.css'; // You may have a separate CSS file for styling
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List App</h1>
        <TodoApp />
      </header>
    </div>
  );
}

export default App;
