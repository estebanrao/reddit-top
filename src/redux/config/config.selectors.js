import { createSelector } from 'reselect';

const selectConfig = (state) => state.config;

export const selectConfigIsDarkModeActive = createSelector(
  [selectConfig],
  (config) => config.isDarkModeActive
);
