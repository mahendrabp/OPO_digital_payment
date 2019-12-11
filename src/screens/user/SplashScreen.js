import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class SplashScreen extends Component {
  componentDidMount() {
    // if (
    //   AsyncStorage.getItem('Authorization') !== null &&
    //   AsyncStorage.getItem('Authorization') !== ''
    // ) {
    //   this.props.navigation.replace('MenuTabs');
    // } else {
    //   setTimeout(() => {
    //     this.props.navigation.navigate('IntroScreen');
    //   }, 4000);
    // }
    setTimeout(() => {
      this.props.navigation.navigate('IntroScreen');
    }, 4000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textScreen}>OPO</Text>
        <Text style={styles.subTitle}>Digital Payment</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4E2A87',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  textScreen: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 50,
  },
});
