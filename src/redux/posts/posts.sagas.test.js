import { takeLatest } from 'redux-saga/effects';

import PostActionTypes from './posts.types';
import { fetchPosts, postsSagas } from './posts.sagas';

describe('postsSagas', () => {
  it('should create posts sagas to fetch posts', () => {
    const generator = postsSagas();
    const value = generator.next().value;

    expect(value).toEqual(
      takeLatest(PostActionTypes.FETCH_POSTS_START, fetchPosts)
    );
  });
});
