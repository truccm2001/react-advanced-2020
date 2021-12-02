import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setperson] = useState({firstName:'', age:'', email:''});
  const [people, setPeople] = useState([]);
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setperson({...person, [name]: value});

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(people); 
    if (person.name !== '' &&  person.age !== '' && person.email !== '')
    {
      console.log(people); 
      setPeople([...people, person]);
      console.log(people); 
    }

    
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <button type='submit'>add person</button>
        </form>
        {people.map((element, index) => {
          const {firstName, email } = element;
          return (
            <div className='item' key={index}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
