import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './src/screens/user/LoginScreen';
import SplashScreen from './src/screens/user/SplashScreen';
import OTP from './src/screens/user/OTP';
import OTPRegister from './src/screens/user/OTPRegister';
import SecurityCode from './src/screens/user/SecurityCode';
import SecurityCodeRegister from './src/screens/user/SecurityCodeRegister';
import HelpScreen from './src/screens/user/HelpScreen';
import IntroScreen from './src/screens/IntroScreen';
import RegisterScreen from './src/screens/user/RegisterScreen';
import MenuTabs from './src/screens/menu';

function App() {
  return (
    // <Provider store={store}>
    //   <AppContainer />
    // </Provider>
    <AppContainer />
  );
}

const MainNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },

    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#534090',
        },
      },
    },
    LoginScreen: {
      screen: LoginScreen,
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
    SecurityCode: {
      screen: SecurityCode,
      navigationOptions: {
        header: null,
      },
    },

    SecurityCodeRegister: {
      screen: SecurityCodeRegister,
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

    OTPRegister: {
      screen: OTPRegister,
      navigationOptions: {
        header: null,
      },
    },

    MenuTabs: {screen: MenuTabs},
  },

  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(MainNavigator);

export default App;
