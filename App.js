import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

import {colors} from './src/styles';
import {configureStore} from './src/libs';
import Navigation from './src/navigation';

const {store, persistor} = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Navigation />
    </PersistGate>
  </Provider>
);

export default App;
