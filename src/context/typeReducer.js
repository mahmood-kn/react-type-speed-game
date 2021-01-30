import {
  SHOW_SETTING,
  SET_DIFFICULTY,
  SET_CURR_NAME,
  GET_WORD,
  SET_START,
  UPDATE_TIME,
  CORRECT,
} from './types';

const typeReducer = (state, action) => {
  switch (action.type) {
    case SHOW_SETTING:
      return {
        ...state,
        setting: !state.setting,
      };
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case GET_WORD:
      return {
        ...state,
        word: action.payload,
      };
    case SET_CURR_NAME:
      return {
        ...state,
        currName: action.payload,
      };
    case SET_START:
      return {
        ...state,
        started: true,
        setting: false,
      };
    case CORRECT:
      let exTime;
      if (state.difficulty === 'easy') {
        exTime = 10;
      } else if (state.difficulty === 'medium') {
        exTime = 5;
      } else {
        exTime = 3;
      }

      return {
        ...state,
        currTime: state.currTime + exTime,
        score: state.score + 1,
      };
    case UPDATE_TIME:
      if (state.currTime === 0) {
        state.gameOver = true;
      }
      return {
        ...state,
        currTime: state.currTime - 1,
        gameOver: state.gameOver,
      };

    default:
      return state;
  }
};
export default typeReducer;
