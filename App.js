// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// <<<<<<< HEAD
// import {Provider} from 'react-redux';
// import store from './src/public/redux/store';

// =======
// import {View} from 'react-native';

// import {Button, Header, Left, Body, Right, Title} from 'native-base';

// import {TouchableOpacity} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// // import LoginScreen from './src/screens/user/LoginScreen';
// // import SplashScreen from './src/screens/user/SplashScreen';

// // import RegisterScreen from './src/screens/user/RegisterScreen';
// import MenuTabs from './src/screens/menu';
// >>>>>>> origin/Home
// import LoginScreen from './src/screens/user/LoginScreen';
// import SplashScreen from './src/screens/user/SplashScreen';
// import OTP from './src/screens/user/OTP';
// import OTPRegister from './src/screens/user/OTPRegister';
// import SecurityCode from './src/screens/user/SecurityCode';
// <<<<<<< HEAD
// import SecurityCodeRegister from './src/screens/user/SecurityCodeRegister';
// import HelpScreen from './src/screens/user/HelpScreen';
// import IntroScreen from './src/screens/IntroScreen';
// import RegisterScreen from './src/screens/user/RegisterScreen';
// import MenuTabs from './src/screens/menu';
// =======
// import HomeContent from './src/screens/homecontent';
// >>>>>>> origin/Home

// function App() {
//   return (
//     <Provider store={store}>
//       <AppContainer />
//     </Provider>
//     // <AppContainer />
//   );
// }

// const MainNavigator = createStackNavigator(
//   {
//     SplashScreen: {
//       screen: SplashScreen,
//       navigationOptions: {
//         header: null,
//       },
// <<<<<<< HEAD
//     },

//     RegisterScreen: {
//       screen: RegisterScreen,
//       navigationOptions: {
//         headerStyle: {
//           backgroundColor: '#534090',
//         },
//       },
//     },
//     LoginScreen: {
//       screen: LoginScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },

//     IntroScreen: {
//       screen: IntroScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     HelpScreen: {
//       screen: HelpScreen,
// =======
//     },
//     IntroScreen: {
//       screen: IntroScreen,
// >>>>>>> origin/Home
//       navigationOptions: {
//         header: null,
//       },
//     },
// <<<<<<< HEAD
//     SecurityCode: {
//       screen: SecurityCode,
// =======
//     HelpScreen: {
//       screen: HelpScreen,
// >>>>>>> origin/Home
//       navigationOptions: {
//         header: null,
//       },
//     },
// <<<<<<< HEAD

//     SecurityCodeRegister: {
//       screen: SecurityCodeRegister,
// =======
//     LoginScreen: {
//       screen: LoginScreen,
// >>>>>>> origin/Home
//       navigationOptions: {
//         header: null,
//       },
//     },
// <<<<<<< HEAD

//     OTP: {
//       screen: OTP,
// =======
//     SecurityCode: {
//       screen: SecurityCode,
// >>>>>>> origin/Home
//       navigationOptions: {
//         header: null,
//       },
//     },
// <<<<<<< HEAD

//     OTPRegister: {
//       screen: OTPRegister,
// =======
//     OTP: {
//       screen: OTP,
// >>>>>>> origin/Home
//       navigationOptions: {
//         header: null,
//       },
//     },
// <<<<<<< HEAD
// =======
//     HomeContent: {
//       screen: HomeContent,
//       navigationOptions: {
//         header: null,
//       },
//     },
//   MenuTabs: {
//     screen: MenuTabs,
//     navigationOptions: {
//       header: (
//         <View style={{borderBottomColor: '#4E2A87', borderBottomWidth: 1}}>
//           <Header style={{backgroundColor: '#4E2A87'}} transparent>
//             <Left />
//             <Body>
//               <Title
//                 style={{
//                   color: '#FCFCFE',
//                   marginLeft: -50,
//                   fontWeight: 'bold',
//                   fontSize: 25,
//                 }}>
//                 OPO
//               </Title>
//             </Body>
//             <Right>
//               <TouchableOpacity>
//                 <Button transparent>
//                   <Icon name="bell" color="#B3A4C9" size={20} />
//                 </Button>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Button transparent>
//                   <Icon name="cog" color="#B3A4C9" size={25} />
//                 </Button>
//               </TouchableOpacity>
//             </Right>
//           </Header>
//         </View>
//       ),
//     },
//   },
// },
//   {
//     initialRouteName: 'MenuTabs',
//   },
// );
// >>>>>>> origin/Home

//     MenuTabs: {screen: MenuTabs},
//   },

//   {
//     initialRouteName: 'SplashScreen',
//     headerMode: 'none',
//   },
// );

// const AppContainer = createAppContainer(MainNavigator);

// export default App;

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import store from './src/public/redux/store';
import {Button, Header, Left, Body, Right, Title} from 'native-base';
import {View} from 'react-native';
import LoginScreen from './src/screens/user/LoginScreen';
import SplashScreen from './src/screens/user/SplashScreen';
import OTP from './src/screens/user/OTP';
import OTPRegister from './src/screens/user/OTPRegister';
import SecurityCode from './src/screens/user/SecurityCode';
import SecurityCodeRegister from './src/screens/user/SecurityCodeRegister';
import HelpScreen from './src/screens/user/HelpScreen';
import IntroScreen from './src/screens/IntroScreen';
import RegisterScreen from './src/screens/user/RegisterScreen';
import SettingScreen from './src/screens/SettingScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import MenuTabs from './src/screens/menu';
import HomeContent from './src/screens/homecontent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import homeNav from './src/screens/menu/home/index';

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
      {/* <HomeNav /> */}
    </Provider>
    // <AppContainer />
  );
}

// const MainNavigator = createStackNavigator(
//   {
//     SplashScreen: {
//       screen: SplashScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },

//     RegisterScreen: {
//       screen: RegisterScreen,
//       navigationOptions: {
//         headerStyle: {
//           backgroundColor: '#534090',
//         },
//       },
//     },
//     LoginScreen: {
//       screen: LoginScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },

//     IntroScreen: {
//       screen: IntroScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     HelpScreen: {
//       screen: HelpScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     SecurityCode: {
//       screen: SecurityCode,
//       navigationOptions: {
//         header: null,
//       },
//     },

//     SecurityCodeRegister: {
//       screen: SecurityCodeRegister,
//       navigationOptions: {
//         header: null,
//       },
//     },

//     OTP: {
//       screen: OTP,
//       navigationOptions: {
//         header: null,
//       },
//     },

//     OTPRegister: {
//       screen: OTPRegister,
//       navigationOptions: {
//         header: null,
//       },
//     },

//     MenuTabs: {
//       screen: MenuTabs,
//       navigationOptions: {
//         header: (
//           <View style={{borderBottomColor: '#4E2A87', borderBottomWidth: 1}}>
//             <Header style={{backgroundColor: '#4E2A87'}} transparent>
//               <Left />
//               <Body>
//                 <Title
//                   style={{
//                     color: '#FCFCFE',
//                     marginLeft: -50,
//                     fontWeight: 'bold',
//                     fontSize: 25,
//                   }}>
//                   OPO
//                 </Title>
//               </Body>
//               <Right>
//                 <TouchableOpacity>
//                   <Button transparent>
//                     <Icon name="bell" color="#B3A4C9" size={20} />
//                   </Button>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                   <Button transparent>
//                     <Icon name="cog" color="#B3A4C9" size={25} />
//                   </Button>
//                 </TouchableOpacity>
//               </Right>
//             </Header>
//           </View>
//         ),
//       },
//     },
//   },

//   {
//     initialRouteName: 'SplashScreen',
//     headerMode: 'none',
//   },
// );

// const AppContainer = createAppContainer(MainNavigator);

// export default App;

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
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#534090',
        },
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

    SecurityCodeRegister: {
      screen: SecurityCodeRegister,
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
    HomeContent: {
      screen: HomeContent,
      navigationOptions: {
        header: null,
      },
    },
    SettingScreen: {
      screen: SettingScreen,
      navigationOptions: {
        headerStyle: {
          marginTop: 25,
        },
      },
    },
    NotificationScreen: {
      screen: NotificationScreen,
      navigationOptions: {
        headerStyle: {
          marginTop: 25,
        },
      },
    },
    MenuTabs: {
      screen: MenuTabs,
      navigationOptions: {
        header: props => (
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
                  <Button
                    transparent
                    onPress={() =>
                      props.navigation.navigate('NotificationScreen')
                    }>
                    <Icon name="bell" color="#B3A4C9" size={20} />
                  </Button>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Button
                    transparent
                    onPress={() => props.navigation.navigate('SettingScreen')}>
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
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(MainNavigator);
// const HomeNav = homeNav;

// const AppContainer = createAppContainer(StackNavigator);

// class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

export default App;
