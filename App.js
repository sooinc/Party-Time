import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
import Main from './components/Main';
import FirebaseWrapper from './firebase/firebase';
import { firebaseConfig } from './firebase/config';

export default function App() {
  FirebaseWrapper.GetInstance().Initialize(firebaseConfig);
  return (
    // <Provider store={store}>
    <Main />
    // </Provider>
  );
}
