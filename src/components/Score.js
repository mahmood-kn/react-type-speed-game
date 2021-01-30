import React, { useContext } from 'react';
import TypeContext from '../context/typeContext';
const Score = () => {
  const { started, score, gameOver } = useContext(TypeContext);
  const classes = ['score-container'];
  if (started) {
    classes.push('started');
  }

  if (gameOver) {
    classes.splice(classes.length - 1, 1);
  }

  return (
    <div className={classes.join(' ')}>
      <p>Score: {score}</p>
    </div>
  );
};

export default Score;
