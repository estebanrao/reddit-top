import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchPostsSuccess, fetchPostsFailure } from './posts.actions';
import PostActionTypes from './posts.types';

export function* fetchPosts() {
  try {
    const response = yield call(axios.get, [
      'https://www.reddit.com/r/memes/top.json?limit=50',
    ]);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* postsSagas() {
  yield takeLatest(PostActionTypes.FETCH_POSTS_START, fetchPosts);
}
