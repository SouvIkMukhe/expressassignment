import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { UserProvider } from './components/UserContext';
import './components/styles.css';  // Import the CSS file

const usersArray = [
  { id: 1, name: 'User1' },
  { id: 2, name: 'User2' },
  { id: 3, name: 'User3' },
];

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
