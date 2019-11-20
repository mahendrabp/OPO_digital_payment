import {createStackNavigator} from 'react-navigation-stack';
import PLN from './pln';
import Pulsa from './pulsa';

export default createStackNavigator(
  {
    PLN,
    Pulsa,
  },
  {
    headerMode: 'none',
  },
);
