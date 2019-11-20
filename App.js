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
import RegisterScreen from './src/screens/user/RegisterScreen';

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
    // },

    // RegisterScreen: {
    //   screen: RegisterScreen,
    //   navigationOptions: {
    //     headerStyle: {
    //       backgroundColor: '#534090',
    //     },
    //   },
    // },

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
    MenuTabs: {screen: MenuTabs},
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

// const StackNavigator = createStackNavigator({
//   SplashScreen: {
//     screen: SplashScreen,
//     navigationOptions: {
//       header: null,
//     },
//   },
//   IntroScreen: {
//     screen: IntroScreen,
//     navigationOptions: {
//       header: null,
//     },
//   },
//   HelpScreen: {
//     screen: HelpScreen,
//     navigationOptions: {
//       header: null,
//     },
//   },
//   LoginScreen: {
//     screen: LoginScreen,
//     navigationOptions: {
//       header: null,
//     },
//   },
//   SecurityCode: {
//     screen: SecurityCode,
//     navigationOptions: {
//       header: null,
//     },
//   },
//   OTP: {
//     screen: OTP,
//     navigationOptions: {
//       header: null,
//     },
//   },
// });
// >>>>>>> origin/interface_intro_to_app

const AppContainer = createAppContainer(MainNavigator);

// const AppContainer = createAppContainer(StackNavigator);

// class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

export default App;
