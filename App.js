import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';

// import LoginScreen from './src/screens/user/LoginScreen';
// import SplashScreen from './src/screens/user/SplashScreen';

// import RegisterScreen from './src/screens/user/RegisterScreen';
import MenuTabs from './src/screens/menu';
import MyHeader from './src/screens/header/Header';
import LoginScreen from './src/screens/user/LoginScreen';
import SplashScreen from './src/screens/user/SplashScreen';

import IntroScreen from './src/screens/IntroScreen';
import HelpScreen from './src/screens/user/HelpScreen';
import OTP from './src/screens/user/OTP';
import SecurityCode from './src/screens/user/SecurityCode';

import store from './src/public/redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
    // <AppContainer />
  );
}

const MainNavigator = createStackNavigator(
  {
    // SettingScreen: {
    //   screen: SettingScreen,
    //   navigationOptions: {
    //     title: 'SETTINGS',
    //     headerStyle: {
    //       backgroundColor: '#534090',
    //     },
    //     headerTitleStyle: {
    //       color: '#FEFEFF',
    //       fontSize: 13,
    //     },
    //   },
    // },
    // RegisterScreen: {
    //   screen: RegisterScreen,
    //   navigationOptions: {
    //     headerStyle: {
    //       backgroundColor: '#534090',
    //     },
    //   },
    //   IntroScreen: {
    //     screen: IntroScreen,
    //     navigationOptions: {
    //       header: null,
    //     },
    // },
    SplashScreen: {
      screen: SplashScreen,
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
    OTP: {
      screen: OTP,
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
    // RegisterScreen: {
    //   screen: RegisterScreen,
    //   navigationOptions: {
    //     headerStyle: {
    //       backgroundColor: '#534090',
    //     },
    //   },
    // // },
  },

  // SplashScreen: {
  //   screen: SplashScreen,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  // LoginScreen: {
  //   screen: LoginScreen,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  //     MenuTabs: {screen: MenuTabs},
  //   },
  //   {
  //     initialRouteName: 'MenuTabs',
  //     headerMode: 'none',
  //   },
  // );

  // const StackNavigator = createStackNavigator({
  // SplashScreen: {
  //   screen: SplashScreen,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },

  // {
  //   initialRouteName: 'SplashScreen',
  //   headerMode: 'none',
  // },
);

const AppContainer = createAppContainer(MainNavigator);

export default App;
