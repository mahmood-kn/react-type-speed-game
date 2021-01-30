import React from 'react';

const Setting = () => {
  return (
    <div className='setting-container'>
      <form>
        <label htmlFor='difficulty'>Difficulty</label>
        <select className='difficulty' value='medium'>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
      </form>
    </div>
  );
};

export default Setting;
