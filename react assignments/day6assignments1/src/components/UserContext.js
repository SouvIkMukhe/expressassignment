import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const usersArray = [
    { id: 1, name: 'Hey' },
    { id: 2, name: 'How' },
    { id: 3, name: 'Are' },
  ];
  
  return (
    <UserContext.Provider value={usersArray}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
