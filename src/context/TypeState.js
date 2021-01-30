import React, { useReducer } from 'react';
import TypeReducer from './typeReducer';
import TypeContext from './typeContext';
import {
  GET_WORD,
  SET_DIFFICULTY,
  SHOW_SETTING,
  SET_CURR_NAME,
  SET_START,
} from './types';

const TypeState = ({ children }) => {
  const initialState = {
    currName: '',
    score: 0,
    currTime: 8,
    difficulty: 'medium',
    setting: true,
    started: false,
    word: [],
  };
  const [state, dispatch] = useReducer(TypeReducer, initialState);

  const showSetting = () => {
    dispatch({ type: SHOW_SETTING });
  };

  const setDifficulty = (difficulty) => {
    dispatch({ type: SET_DIFFICULTY, payload: difficulty });
  };

  const getWord = async () => {
    const res = await fetch(
      `https://random-word-api.herokuapp.com/word?number=1`
    );
    const word = await res.json();
    console.log(word);
    dispatch({ type: GET_WORD, payload: word });
  };

  const setCurrName = (updatedCurrName) => {
    dispatch({ type: SET_CURR_NAME, payload: updatedCurrName });
  };

  const setStart = () => {
    dispatch({ type: SET_START });
  };

  return (
    <TypeContext.Provider
      value={{
        currName: state.currName,
        score: state.score,
        currTime: state.currTime,
        difficulty: state.difficulty,
        setting: state.setting,
        started: state.started,
        word: state.word,
        showSetting,
        setDifficulty,
        getWord,
        setCurrName,
        setStart,
      }}>
      {children}
    </TypeContext.Provider>
  );
};

export default TypeState;
