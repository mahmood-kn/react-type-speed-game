import React from 'react';
import Setting from './components/Setting';
import Start from './components/Start';
import Game from './components/Game';
import Time from './components/Time';
import Score from './components/Score';
import GameOver from './components/GameOver';

const App = () => {
  return (
    <>
      <Setting />
      <div className='container'>
        <h2 className='game-title'>👩‍💻 Speed Typer 👨‍💻</h2>
        <Start />
        <Game />
        <Time />
        <Score />
        <GameOver />
      </div>
    </>
  );
};

export default App;
