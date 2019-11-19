import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/screens/user/LoginScreen';
import SplashScreen from './src/screens/user/SplashScreen';
import IntroScreen from './src/screens/IntroScreen';
import HelpScreen from './src/screens/user/HelpScreen';
import OTP from './src/screens/user/OTP';
import SecurityCode from './src/screens/user/SecurityCode';

const StackNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  IntroScreen: {
    screen: IntroScreen,
    navigationOptions: {
      header: null,
    },
  },
  HelpScreen: {
    screen: HelpScreen,
    navigationOptions: {
      header: null,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  SecurityCode: {
    screen: SecurityCode,
    navigationOptions: {
      header: null,
    },
  },
  OTP: {
    screen: OTP,
    navigationOptions: {
      header: null,
    },
  },
});

const AppContainer = createAppContainer(StackNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
