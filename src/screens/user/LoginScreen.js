import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, Text, Alert, Image, BackHandler} from 'react-native';
import {Button, Form, Item, Label, Input, Icon} from 'native-base';
import {loginstep1} from '../../public/redux/action/users';
import {connect} from 'react-redux';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhoneValid: false,
      isButton: false,
      number: '',
      phone: '',
    };
  }

  goSubmit = async () => {
    const {phone} = this.state;
    if (!this.state.phone) {
      return;
    } else {
      await this.props.dispatch(loginstep1({phone}));
      await this.props.navigation.navigate('Dashboard');
    }
  };

  onChangePhone = value => {
    this.setState({phone: value});
    console.log(value);
  };

  goToHelp = () => {
    this.props.navigation.navigate('HelpScreen');
  };

  goToOTP = () => {
    this.props.navigation.navigate('OTP');
  };
  goRegister = () => {
    this.props.navigation.navigate('RegisterScreen');
  };

  validateFieldPhone = bool => {
    const {phone} = this.state;
    if (phone === '') {
      Alert.alert('Perhatian!', 'Masukan Nomor Ponsel');
      return false;
    } else {
      return true;
    }
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    BackHandler.exitApp();
    return true;
  };

  SignAlert = async () => {
    const {phone} = this.state;
    if (this.validateFieldPhone()) {
      // Alert.alert('Perhatian!', 'Success Login');
      await this.props.dispatch(loginstep1({phone}));
      await this.props.navigation.navigate('Dashboard');
      this.goToOTP();
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textScreen}>OPO</Text>
        <Text style={styles.subTitle}>Digital Payment</Text>
        <View style={styles.InputText}>
          <Form>
            <Item floatingLabel>
              <Icon name="person" style={styles.iconNumber} />
              <Label style={styles.labelInput}> Nomor Ponsel</Label>
              <Input
                style={styles.InputPonsel}
                maxLength={15}
                keyboardType={'numeric'}
                onChangeText={this.onChangePhone}
              />
            </Item>
          </Form>
        </View>
        <Button
          block
          bordered
          light
          style={styles.buttonInputValid}
          onPress={() => this.SignAlert()}>
          <Text style={styles.ButtonTextValid}>SIGN IN</Text>
        </Button>
        <Text style={styles.atau}> ───────────── ATAU ───────────── </Text>
        <Button
          block
          style={styles.buttonInputJoin}
          onPress={() => this.goRegister()}>
          <Text style={styles.ButtonText}>JOIN NOW</Text>
        </Button>
        <Button block transparent style={styles.buttonHelp}>
          <Image
            style={styles.iconHelp}
            source={require('../../../assets/img/needhelp.png')}
          />
          <Text style={styles.HelpText} onPress={() => this.goToHelp()}>
            Butuh bantuan?
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4E2A87',
  },
  iconNumber: {
    color: '#fff',
  },
  buttonHelp: {
    marginTop: 10,
  },
  InputPonsel: {
    color: '#fff',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
  },
  iconHelp: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  HelpText: {
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
    textAlign: 'center',
  },
  labelInput: {
    color: '#fff',
    fontSize: 15,
  },
  InputText: {
    marginLeft: 20,
    marginRight: 30,
    color: '#fff',
  },
  ButtonText: {
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
  },
  ButtonTextInValid: {
    marginLeft: 20,
    marginRight: 20,
    color: '#b2bec3',
  },
  ButtonTextValid: {
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
  },
  buttonInputValid: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
    borderRadius: 30,
  },
  buttonInputInValid: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
    borderRadius: 30,
    borderColor: '#b2bec3',
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

// export default LoginScreen;

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(LoginScreen);
