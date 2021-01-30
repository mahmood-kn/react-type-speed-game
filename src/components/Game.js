import React, { useContext, useRef, useState } from 'react';
import TypeContext from '../context/typeContext';
const Game = () => {
  const { started, word, correct, gameOver } = useContext(TypeContext);
  const classes = ['game-container'];
  const type = useRef(null);
  const [inputType, setInputType] = useState('');
  if (started) {
    classes.push('started');
    type.current.focus();
  }

  const handleChange = (e) => {
    setInputType(e.target.value);
    checkCorrect(e.target.value);
  };

  const checkCorrect = (currWord) => {
    if (currWord.toLowerCase() === word[0]) {
      correct();
      setInputType('');
    }
  };
  if (gameOver) {
    classes.splice(classes.length - 1, 1);
  }
  return (
    <div className={classes.join(' ')}>
      <p>Type the following:</p>
      <h1>{word[0]}</h1>
      <input
        ref={type}
        value={inputType}
        onChange={handleChange}
        type='text'
        placeholder='Enter the word...'
        autoComplete='off'
      />
    </div>
  );
};

export default Game;
