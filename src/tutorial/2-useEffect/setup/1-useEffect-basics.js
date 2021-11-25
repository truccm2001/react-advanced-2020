import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
var temp2 = 0;
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    document.title = (`Display: ${value}`);
    console.log('use effect is called');
    console.log(temp2);
  }, [temp2]);

  useEffect(() => {
    console.log('Second use effect');
  });

  return <>
    <h2>useEffect Basics</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={() => {setValue(value + 1); setTemp(temp+2); temp2 += 2;} }>Click me</button>
  </>
};

export default UseEffectBasics;
