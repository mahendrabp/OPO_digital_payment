import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import LoginScreen from './src/screens/user/LoginScreen';
// import SplashScreen from './src/screens/user/SplashScreen';

// import RegisterScreen from './src/screens/user/RegisterScreen';
import MenuTabs from './src/screens/menu';
import MyHeader from './src/screens/header/Header';

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
    // RegisterScreen: {
    //   screen: RegisterScreen,
    //   navigationOptions: {
    //     headerStyle: {
    //       backgroundColor: '#534090',
    //     },
    //   },
    // // },

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
    initialRouteName: 'MenuTabs',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(MainNavigator);

// const AppContainer = createAppContainer(StackNavigator);

// class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

export default App;
