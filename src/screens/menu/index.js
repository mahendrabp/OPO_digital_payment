/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MyHeader from './../header/Header';

import HomeTab from './home';
import DealsTab from './deals';
import FinanceTab from './finance';
import WalletTab from './wallet';
import HistoryTab from './history';

export default createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeTab,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="home"
            color={tintColor}
            size={15}
            style={{textAlign: 'center'}}
          />
        ),
      },
    },
    Deals: {
      screen: DealsTab,
      navigationOptions: {
        title: 'Deals',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="shopping-bag"
            color={tintColor}
            size={15}
            style={{textAlign: 'center'}}
          />
        ),
      },
    },
    Finance: {
      screen: FinanceTab,
      navigationOptions: {
        title: 'Finance',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="chart-line"
            color={tintColor}
            size={15}
            style={{textAlign: 'center'}}
          />
        ),
      },
    },
    Wallet: {
      screen: WalletTab,
      navigationOptions: {
        title: 'Wallet',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="wallet"
            color={tintColor}
            size={15}
            style={{textAlign: 'center'}}
          />
        ),
      },
    },
    History: {
      screen: HistoryTab,
      navigationOptions: {
        title: 'History',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="signal"
            color={tintColor}
            size={15}
            style={{textAlign: 'center'}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#ffffff',
      labelStyle: {
        fontSize: 12,
      },
      upperCaseLabel: false,
      showIcon: true,
      indicatorStyle: {
        height: null,
      },
      style: {
        backgroundColor: '#4E2A87',
        textAlign: 'center',
        borderRadius: null,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        marginStart: -10,
        marginEnd: -10,
      },
    },
  },
);
