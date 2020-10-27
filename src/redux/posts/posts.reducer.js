import PostsActionTypes from './posts.types';

// import { POSTS_DATA } from './posts-data';

const INITIAL_STATE = {
  posts: null,
  isFetchingPosts: false,
  errorFetchingPosts: false,
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

    case PostsActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isFetchingPosts: true,
      };

    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetchingPosts: false,
        posts: action.payload?.data?.children,
      };

    case PostsActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetchingPosts: false,
        errorFetchingPosts: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
