import React, { useContext } from 'react';
import TypeContext from '../context/typeContext';

const Setting = () => {
  const { setting, difficulty, setDifficulty } = useContext(TypeContext);
  let classes = ['setting-container'];

  if (!setting) {
    classes.push('hide');
  }

  const handleChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <div className={classes.join(' ')}>
      <form>
        <label htmlFor='difficulty'>Difficulty</label>
        <select
          className='difficulty'
          value={difficulty}
          onChange={handleChange}>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
      </form>
    </div>
  );
};

export default Setting;
