import ConfigActionTypes from './config.types';

import configReducer from './config.reducer';

describe('configReducer', () => {
  const INITIAL_STATE = {
    isDarkModeActive: false,
    readPosts: [],
    savedItems: [],
  };

  it('should return the initial state', () => {
    expect(configReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle TOGGLE_DARK_MODE', () => {
    expect(
      configReducer(undefined, { type: ConfigActionTypes.TOGGLE_DARK_MODE })
    ).toEqual({
      isDarkModeActive: true,
      readPosts: [],
      savedItems: [],
    });
  });

  it('should handle MARK_POST_READ', () => {
    expect(
      configReducer(INITIAL_STATE, {
        type: ConfigActionTypes.MARK_POST_READ,
        payload: '123',
      })
    ).toEqual({
      isDarkModeActive: false,
      readPosts: ['123'],
      savedItems: [],
    });
  });

  it('should handle ADD_SAVED_ITEM', () => {
    expect(
      configReducer(INITIAL_STATE, {
        type: ConfigActionTypes.ADD_SAVED_ITEM,
        payload: { id: '123' },
      })
    ).toEqual({
      isDarkModeActive: false,
      readPosts: [],
      savedItems: [{ id: '123' }],
    });
  });

  it('should handle REMOVE_SAVED_ITEM', () => {
    INITIAL_STATE.savedItems = [{ id: '123' }, { id: '456' }];
    expect(
      configReducer(INITIAL_STATE, {
        type: ConfigActionTypes.REMOVE_SAVED_ITEM,
        payload: '123',
      })
    ).toEqual({
      isDarkModeActive: false,
      readPosts: [],
      savedItems: [{ id: '456' }],
    });
  });
});
