import ConfigActionTypes from './config.types';

const INITIAL_STATE = {
  isDarkModeActive: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConfigActionTypes.TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkModeActive: !state.isDarkModeActive,
      };

    default:
      return state;
  }
};

export default cartReducer;
