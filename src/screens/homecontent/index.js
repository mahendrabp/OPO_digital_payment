import {createStackNavigator} from 'react-navigation-stack';
import PLN from './pln';
import Transfer from './transfer';
import OPO from './opo';
import Bank from './bank';
import {Provider} from 'react-redux';
import {store} from '../../public/redux/store';

export default createStackNavigator(
  {
    PLN,
    OPO,
    Bank,
    Transfer,
  },
  {
    headerMode: 'none',
  },
);
