/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import RegisterScreen from './src/screens/user/RegisterScreen';

function App() {
  return (
    // <Provider store={store}>
    //   <AppContainer />
    // </Provider>
    <AppContainer />
  );
}

const MainNavigator = createStackNavigator({
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#534090',
      },
    },
  },
});

const AppContainer = createAppContainer(MainNavigator);

export default App;
