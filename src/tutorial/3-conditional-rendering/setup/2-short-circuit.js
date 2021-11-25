import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const handleClick = () => {
      setValue(!value);
  }

  const [value, setValue] = useState(false);
  return (
  <>
  <h2>short circuit</h2>
  {value && <h1>abc</h1>}
  <button onClick={handleClick}>Click me</button>
  </>);
};

export default ShortCircuit;
