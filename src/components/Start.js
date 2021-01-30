import React from 'react';

const Start = () => {
  return (
    <div className='start-container'>
      <input
        type='text'
        placeholder='Enter your name'
        className='name'
        autoComplete='off'
      />
      <button className='start'>Start</button>
    </div>
  );
};

export default Start;
