import PostActionTypes from './posts.types';

export const togglePostSelected = (post) => ({
  type: PostActionTypes.TOGGLE_POST_SELECTED,
  payload: post,
});

export const dismissPost = (postId) => ({
  type: PostActionTypes.DISMISS_POST,
  payload: postId,
});

export const dismissAll = () => ({
  type: PostActionTypes.DISMISS_ALL,
});

export const fetchPostsStart = () => ({
  type: PostActionTypes.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (data) => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  payload: data,
});

export const fetchPostsFailure = (error) => ({
  type: PostActionTypes.FETCH_POSTS_FAILURE,
  payload: error,
});
