import PostActionTypes from './posts.types';

export const togglePostSelected = (post) => ({
  type: PostActionTypes.TOGGLE_POST_SELECTED,
  payload: post,
});

export const dismissPost = (postId) => ({
  type: PostActionTypes.DISMISS_POST,
  payload: postId,
});

export const dismissAll = (postId) => ({
  type: PostActionTypes.DISMISS_ALL,
});
