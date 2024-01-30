import React, { useState } from 'react';
import Child2 from './Child2';

const Child1 = () => {
  const [showButton2, setShowButton2] = useState(false);

  const handleButtonClick = () => {
    setShowButton2(true);
  };

  return (
    <div>
      <h2>Child-1 Component</h2>
      <button onClick={handleButtonClick}>Show Button 2</button>
      {showButton2 && <Child2 />}
    </div>
  );
};

export default Child1;
