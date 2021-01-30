import {
  SHOW_SETTING,
  SET_DIFFICULTY,
  SET_CURR_NAME,
  GET_WORD,
  SET_START,
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
      };
    default:
      return state;
  }
};
export default typeReducer;
