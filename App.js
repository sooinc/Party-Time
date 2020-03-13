import React from 'react';
import { Provider } from 'react-dom';
import store from './store';
import Main from './components/Main';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
