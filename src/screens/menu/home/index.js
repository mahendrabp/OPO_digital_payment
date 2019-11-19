import {createStackNavigator} from 'react-navigation-stack';
import Home from './home';
import Balance from './balance';
import Content from './content';

export default createStackNavigator(
  {
    Home,
  },
  {
    headerMode: "none",
  },
);
