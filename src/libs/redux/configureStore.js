import {createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import combinedReducers from './reducer';
import createMiddleware from './middleware';

import {PERSIST_KEY} from '../../constants';

const initialState = {};
const persistConfig = {
  key: PERSIST_KEY,
  storage: AsyncStorage,
};
const middleware = createMiddleware(thunkMiddleware);
const persistedReducer = persistReducer(persistConfig, combinedReducers);

const configureStore = () => {
  const store = createStore(persistedReducer, initialState, middleware);
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default configureStore;
