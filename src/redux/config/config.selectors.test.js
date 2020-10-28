import {
  selectConfigIsDarkModeActive,
  selectConfigSavedItemsIds,
} from './config.selectors';

describe('configSelectors', () => {
  const state = {
    config: {
      isDarkModeActive: false,
      savedItems: [
        {
          id: '123',
          otherProp: 'foo',
        },
        {
          id: '456',
          otherProp: 'bar',
        },
      ],
    },
  };

  it('selectConfigIsDarkModeActive should return isDarkModeActive', () => {
    expect(selectConfigIsDarkModeActive(state)).toBe(false);
  });

  it('selectConfigSavedItemsIds should return an array of savedItems ids', () => {
    expect(selectConfigSavedItemsIds(state)).toEqual(['123', '456']);
  });
});
