import {createStackNavigator} from 'react-navigation-stack';

import MyHeader from './Header';

export default createStackNavigator(
  {
    MyHeader,
  },
  {
    headerMode: 'none',
  },
);
