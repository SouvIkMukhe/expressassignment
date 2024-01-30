import React, { useState } from 'react';
import Child3 from './Child3';

const Child2 = () => {
  const [showButton3, setShowButton3] = useState(false);

  const handleButtonClick = () => {
    setShowButton3(true);
  };

  return (
    <div>
      <h2>Child-2 Component</h2>
      <button onClick={handleButtonClick}>Show Button 3</button>
      {showButton3 && <Child3 />}
    </div>
  );
};

export default Child2;
