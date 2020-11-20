import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import Route from './src/navigation/Route';

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
