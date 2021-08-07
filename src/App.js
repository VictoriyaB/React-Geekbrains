import React from 'react';
import { Provider } from 'react-redux';
import { Router } from './Components/Router/Router';
import { store } from './Components/store/store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
