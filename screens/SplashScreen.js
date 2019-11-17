import React, {Component} from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';

export default class SplashScreen extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.navigation.navigate('LoginScreen');;
    }, 4000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textScreen}>OPO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8e44ad',
  },
  textScreen: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 50,
  },
});
