import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import configReducer from './config/config.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['config'],
};

const rootReducer = combineReducers({
  config: configReducer,
});

export default persistReducer(persistConfig, rootReducer);
