import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {Input, Button, Form, Item, Label} from 'native-base';

export default class LoginScreen extends Component {
  
  SignAlert = () => {
    Alert.alert('Perhatian!', 'Nomor ponsel tidak valid');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textScreen}>OPO</Text>
        <Text style={styles.subTitle}>Digital Payment</Text>
        <Form style={styles.InputText}>
          <Item floatingLabel>
            <Label style={styles.labelInput}>Nomor Ponsel</Label>
            <Input />
          </Item>
        </Form>
        <Button
          block
          bordered
          light
          style={styles.buttonInput}
          onPress={() => this.SignAlert}>
          <Text style={styles.ButtonText}>SIGN IN</Text>
        </Button>
        <Text style={styles.atau}> ───────────── ATAU ───────────── </Text>
        <Button block style={styles.buttonInputJoin}>
          <Text style={styles.ButtonText}>JOIN NOW</Text>
        </Button>
        <Button block transparent style={styles.buttonInput}>
          <Text style={styles.ButtonHelp}>Butuh bantuan?</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8e44ad',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  ButtonHelp: {
    color: '#00d2d3',
    fontSize: 15,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
  direction: {
    flexDirection: 'row',
  },
  textScreen: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 50,
    // marginBottom: 20,
    textAlign: 'center',
  },
  labelInput: {
    color: '#fff',
    fontSize: 15,
  },
  InputText: {
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
  },
  ButtonText: {
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
  },
  buttonInput: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
    borderRadius: 30,
  },
  buttonInputJoin: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
    borderRadius: 30,
    backgroundColor: '#22a6b3',
  },
  atau: {
    textAlign: 'center',
    marginTop: 20,
    color: '#fff',
    fontSize: 12,
  },
});
