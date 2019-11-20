import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/FontAwesome5';

const actions = [
  {
    text: 'Tarik Tunai',
    textBackground: '#141E6C',
    textColor: '#ffffff',
    icon: <Icon name="cash-register" color={'white'} />,
    name: 'bt_tariktunai',
    position: 1,
    color: '#141E6C',
    size: 20,
  },
  {
    text: 'Pay Bill',
    textBackground: '#B7BC01',
    textColor: '#ffffff',
    icon: <Icon name="file-invoice-dollar" color={'white'} />,
    name: 'bt_paybill',
    position: 2,
    color: '#B7BC01',
  },
  {
    text: 'Transfer',
    textBackground: '#FEB635',
    textColor: '#ffffff',
    icon: <Icon name="exchange-alt" color={'white'} />,
    name: 'bt_transfer',
    position: 3,
    color: '#FEB635',
  },
  {
    text: 'Top Up',
    textBackground: '#4E2A87',
    textColor: '#ffffff',
    icon: <Icon name="cart-plus" color={'white'} />,
    name: 'bt_topup',
    position: 4,
    color: '#4E2A87',
  },
];

export default class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FloatingAction
          position="right"
          actions={actions}
          color={'#07B2BB'}
          onPressItem={name => {
            Alert.alert('Icon pressed', `the icon ${name} was pressed`);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
