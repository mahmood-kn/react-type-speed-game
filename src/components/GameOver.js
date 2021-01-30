import React, { useContext } from 'react';
import TypeContext from '../context/typeContext';

const GameOver = () => {
  const { currName, score, gameOver } = useContext(TypeContext);
  const classes = ['end-game'];
  if (gameOver) {
    classes.push('gameover');
  }
  return (
    <div className={classes.join(' ')}>
      <h2>Time out</h2>
      <p>
        Game Over <span className='name-red'>{currName} </span>😃😎
      </p>
      <p className='score'>Your Score: {score}</p>
      <button onClick={() => window.location.reload(false)}>Play Again</button>
    </div>
  );
};

export default GameOver;
