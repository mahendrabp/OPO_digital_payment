/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {View} from 'react-native';

import {Button, Header, Left, Body, Right, Title} from 'native-base';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import LoginScreen from './src/screens/user/LoginScreen';
// import SplashScreen from './src/screens/user/SplashScreen';

// import RegisterScreen from './src/screens/user/RegisterScreen';
import MenuTabs from './src/screens/menu';
import LoginScreen from './src/screens/user/LoginScreen';
import SplashScreen from './src/screens/user/SplashScreen';
import IntroScreen from './src/screens/IntroScreen';
import HelpScreen from './src/screens/user/HelpScreen';
import OTP from './src/screens/user/OTP';
import SecurityCode from './src/screens/user/SecurityCode';
import HomeContent from './src/screens/homecontent';

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
    HomeContent: {
      screen: HomeContent,
      navigationOptions: {
        header: null,
      },
    },
    MenuTabs: {
      screen: MenuTabs,
      navigationOptions: {
        header: (
          <View style={{borderBottomColor: '#4E2A87', borderBottomWidth: 1}}>
            <Header style={{backgroundColor: '#4E2A87'}} transparent>
              <Left />
              <Body>
                <Title
                  style={{
                    color: '#FCFCFE',
                    marginLeft: -50,
                    fontWeight: 'bold',
                    fontSize: 25,
                  }}>
                  OPO
                </Title>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Button transparent>
                    <Icon name="bell" color="#B3A4C9" size={20} />
                  </Button>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Button transparent>
                    <Icon name="cog" color="#B3A4C9" size={25} />
                  </Button>
                </TouchableOpacity>
              </Right>
            </Header>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'MenuTabs',
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
