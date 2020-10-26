import { createSelector } from 'reselect';

const selectConfig = (state) => state.config;

export const selectConfigIsDarkModeActive = createSelector(
  [selectConfig],
  (config) => config.isDarkModeActive
);

export const selectConfigSavedItemsIds = createSelector(
  [selectConfig],
  (config) => config.savedItems.map((item) => item.id)
);
