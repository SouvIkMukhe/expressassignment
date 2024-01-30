import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Child3 = () => {
  const usersArray = useContext(UserContext);

  return (
    <div>
      <h2>Child-3 Component</h2>
      <ul>
        {usersArray.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Child3;
