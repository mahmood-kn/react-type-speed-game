import React, { useContext } from 'react';
import TypeContext from '../context/typeContext';

const SettingBtn = () => {
  const { showSetting } = useContext(TypeContext);
  return (
    <button className='setting-btn' onClick={showSetting}>
      <i className='fas fa-cog'></i>
    </button>
  );
};

export default SettingBtn;
