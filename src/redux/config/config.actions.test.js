import {
  addSavedItem,
  markPostRead,
  removeSavedItem,
  toggleDarkMode,
} from './config.actions';
import ConfigActionTypes from './config.types';

describe('ConfigActions', () => {
  it('should create an action to toggle dark mode', () => {
    expect(toggleDarkMode()).toEqual({
      type: ConfigActionTypes.TOGGLE_DARK_MODE,
    });
  });

  it('should create an action to mark post as read', () => {
    expect(markPostRead('id')).toEqual({
      type: ConfigActionTypes.MARK_POST_READ,
      payload: 'id',
    });
  });

  it('should create an action to add a saved item', () => {
    expect(addSavedItem('item')).toEqual({
      type: ConfigActionTypes.ADD_SAVED_ITEM,
      payload: 'item',
    });
  });

  it('should create an action to remove a saved item', () => {
    expect(removeSavedItem('itemId')).toEqual({
      type: ConfigActionTypes.REMOVE_SAVED_ITEM,
      payload: 'itemId',
    });
  });
});
