import ConfigActionTypes from './config.types';

export const toggleDarkMode = () => ({
  type: ConfigActionTypes.TOGGLE_DARK_MODE,
});

export const markPostRead = (postId) => ({
  type: ConfigActionTypes.MARK_POST_READ,
  payload: postId,
});

export const addSavedItem = (item) => ({
  type: ConfigActionTypes.ADD_SAVED_ITEM,
  payload: item,
});

export const removeSavedItem = (itemId) => ({
  type: ConfigActionTypes.REMOVE_SAVED_ITEM,
  payload: itemId,
});
