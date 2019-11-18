import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/screens/user/LoginScreen';
import SplashScreen from './src/screens/user/SplashScreen';
import SettingScreen from './src/screens/SettingScreen';

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
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
      title: 'SETTINGS',
      headerStyle: {
        backgroundColor: '#534090',
      },
      headerTitleStyle: {
        color: '#FEFEFF',
        fontSize: 13,
      },
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
  SplashScreen: {
    screen: SplashScreen,
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
});

const AppContainer = createAppContainer(MainNavigator);

// const AppContainer = createAppContainer(StackNavigator);

// class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

export default App;
