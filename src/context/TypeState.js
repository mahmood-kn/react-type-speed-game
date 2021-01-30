import React, { useReducer } from 'react';
import TypeReducer from './typeReducer';
import TypeContext from './typeContext';
import {} from './types';

const TypeState = ({ children }) => {
  const initialState = {
    currName: '',
    score: 0,
    currTime: 8,
    difficulty: 'medium',
  };
  const [state, dispatch] = useReducer(TypeReducer, initialState);

  return (
    <TypeContext.Provider
      value={{
        currName: state.currName,
        score: state.score,
        currTime: state.currTime,
        difficulty: state.difficulty,
      }}>
      {children}
    </TypeContext.Provider>
  );
};

export default TypeState;
