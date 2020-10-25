import ConfigActionTypes from './config.types';

const INITIAL_STATE = {
  isDarkModeActive: false,
  readPosts: [],
};

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConfigActionTypes.TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkModeActive: !state.isDarkModeActive,
      };

    case ConfigActionTypes.MARK_POST_READ:
      return {
        ...state,
        readPosts: [...state.readPosts, action.payload],
      };

    default:
      return state;
  }
};

export default configReducer;
