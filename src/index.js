import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from 'config/store';

import Routes from 'routes';
import GlobalStyles from 'styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
