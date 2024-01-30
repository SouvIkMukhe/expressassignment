import React from 'react';
import Child1 from './Child1';
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <h1>App Component</h1>
        <Child1 />
      </div>
    </UserProvider>
  );
};

export default App;
