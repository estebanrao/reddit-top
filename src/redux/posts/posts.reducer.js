import PostsActionTypes from './posts.types';

import { POSTS_DATA } from './posts-data';

const INITIAL_STATE = {
  posts: POSTS_DATA.data.children,
  selectedPost: null,
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsActionTypes.TOGGLE_POST_SELECTED:
      return {
        ...state,
        selectedPost: action.payload,
      };

    case PostsActionTypes.DISMISS_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.data.id !== action.payload),
      };

    case PostsActionTypes.DISMISS_ALL:
      return {
        ...state,
        posts: [],
      };

    default:
      return state;
  }
};

export default postsReducer;
