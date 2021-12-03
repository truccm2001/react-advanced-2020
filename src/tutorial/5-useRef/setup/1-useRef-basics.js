import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const InputRef = useRef(null);

  useEffect(() => {
    console.log(InputRef);
    InputRef.current.focus();
    console.log(InputRef.current.type);
    InputRef.current.value = 'abc truc ngo'
  })

  return (
  <>
  <h2>useRef</h2>
  
  
  <input type='date' ref={InputRef}></input>
  <input type='text' ref={InputRef}></input>
  
  </>);
};

export default UseRefBasics;
