import ConfigActionTypes from './config.types';

export const toggleDarkMode = () => ({
  type: ConfigActionTypes.TOGGLE_DARK_MODE,
});

export const markPostRead = (postId) => ({
  type: ConfigActionTypes.MARK_POST_READ,
  payload: postId,
});
