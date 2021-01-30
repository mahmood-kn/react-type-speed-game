import React, { useContext, useState } from 'react';
import TypeContext from '../context/typeContext';

const Start = () => {
  const { started, currName, getWord, setCurrName, setStart } = useContext(
    TypeContext
  );
  const [name, setName] = useState('');
  // const yourName = useRef(null)
  const classes = ['start-container'];
  if (started) {
    classes.push('hide');
  }

  const handleClick = () => {
    if (!started) {
      if (name === '') {
        alert('Enter your name');
      } else {
        // gameContainer.classList.add('started');
        // timeContainer.classList.add('started');
        // scoreContainer.classList.add('started');
        // yourName.current.focus();

        // setTimeout(() => {
        //   currTimeInt = setInterval(updtateTime, 1000);
        // }, 800);
        setStart();
        setCurrName(name);
        getWord();
      }
    }
  };
  return (
    <div className={classes.join(' ')}>
      <input
        type='text'
        value={name}
        placeholder='Enter your name'
        className='name'
        autoComplete='off'
        onChange={(e) => setName(e.target.value)}
      />
      <button className='start' onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default Start;
