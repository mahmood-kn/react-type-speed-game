import React, { useContext } from 'react';
import TypeContext from '../context/typeContext';

const Time = () => {
  const { started, currTime, gameOver } = useContext(TypeContext);
  const classes = ['time-container'];
  if (started) {
    classes.push('started');
  }
  if (gameOver) {
    classes.splice(classes.length - 1, 1);
  }
  return (
    <div className={classes.join(' ')}>
      <p>Time left: {currTime}s</p>
    </div>
  );
};

export default Time;
