import ConfigActionTypes from './config.types';

const INITIAL_STATE = {
  isDarkModeActive: false,
  readPosts: [],
  savedItems: [],
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

    case ConfigActionTypes.ADD_SAVED_ITEM:
      return {
        ...state,
        savedItems: [...state.savedItems, action.payload], // TODO: Need to check for duplicates (Actually UI prevents this from happening)
      };

    case ConfigActionTypes.REMOVE_SAVED_ITEM:
      return {
        ...state,
        savedItems: state.savedItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default configReducer;
