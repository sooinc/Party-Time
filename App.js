import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import ConnectedMain from './screens/Main';
import CameraScreen from './screens/Camera';
import UserScreen from './screens/User';

import FirebaseWrapper from './firebase/firebase';
import { firebaseConfig } from './firebase/config';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
// import { StackNavigator } from 'react-navigation';

// const fontConfig = {
//   default: {
//     regular: {
//       fontFamily: 'sans-serif',
//       fontWeight: 'normal',
//     },
//     medium: {
//       fontFamily: 'sans-serif-medium',
//       fontWeight: 'normal',
//     },
//     light: {
//       fontFamily: 'sans-serif-light',
//       fontWeight: 'normal',
//     },
//     thin: {
//       fontFamily: 'sans-serif-thin',
//       fontWeight: 'normal',
//     },
//   },
// };

// const theme = {
//   ...DefaultTheme,
//   dark: true,
//   roundness: 4,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     accent: 'yellow',
//     background: 'black',
//     text: 'white',
//   },
//   fonts: configureFonts(fontConfig),
// };

export default function App() {
  FirebaseWrapper.GetInstance().Initialize(firebaseConfig);
  return (
    <Provider store={store}>
      <PaperProvider>
        <Header />
        <ConnectedMain />
        {/* <AppNavigator /> */}
      </PaperProvider>
    </Provider>
  );
}

// const AppNavigator = StackNavigator({
//   ConnectedMain: { screen: ConnectedMain },
//   CameraScreen: { screen: CameraScreen },
//   UserScreen: { screen: UserScreen },
// });
