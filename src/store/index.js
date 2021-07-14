import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import home from './slices/home';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favoritesPersonages'],
};

const rootReducer = combineReducers({
  home: persistReducer(persistConfig, home),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
