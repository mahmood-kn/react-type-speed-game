import React from 'react';
import SettingBtn from './components/SettingBtn';
import Setting from './components/Setting';
import Start from './components/Start';
import Game from './components/Game';
import Time from './components/Time';
import Score from './components/Score';
import End from './components/End';

const App = () => {
  return (
    <>
      <SettingBtn />
      <Setting />
      <div className='container'>
        <h2 className='game-title'>👩‍💻 Speed Typer 👨‍💻</h2>
        <Start />
        <Game />
        <Time />
        <Score />
        <End />
      </div>
    </>
  );
};

export default App;
