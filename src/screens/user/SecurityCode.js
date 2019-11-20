/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, BackHandler, TextInput} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Title,
  Content,
  ListItem,
  Input,
  Item,
  Label,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {loginstep2} from '../../public/redux/action/users';
class SecurityCode extends Component {
  constructor(props) {
    const phone = props.user.resultStep1.phone;
    super(props);
    this.secondTextInput = null;
    this.state = {
      isPhoneValid: false,
      isButton: false,
      number: '',
      phone,
      securityCode: '',
    };
  }

  SignAlert = async () => {
    const {phone, securityCode} = this.state;
    if (this.validateFieldPhone()) {
      // Alert.alert('Perhatian!', 'Success Login');
      await this.props.dispatch(loginstep2({phone, securityCode}));
      await this.props.navigation.navigate('Dashboard');
      this.goToOTP();
    }
  };

  componentDidMount() {
    console.log(this.state.phone);
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
    console.log(this.props.user);
  }

  goBack = () => {
    this.props.navigation.navigate('OTP');
  };

  handleBackPress = () => {
    this.goBack();
    return true;
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#4E2A87'}}>
          <Left>
            <Button transparent onPress={() => this.goBack()}>
              <Icon name="arrow-left" color="white" size={20} />
            </Button>
          </Left>
          <Body>
            <Title style={{fontSize: 15}}>SIGN IN</Title>
          </Body>
        </Header>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              textAlign: 'center',
              marginTop: 50,
              color: '#4E2A87',
            }}>
            {' '}
            Masukkan Security Code Anda{' '}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 80}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Item style={{width: 30, marginLeft: 40}}>
              <TextInput
                style={{textAlign: 'center', fontSize: 20}}
                maxLength={1}
                keyboardType={'numeric'}
                secureTextEntry={true}
                onChangeText={() => {
                  this.secondTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </Item>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Item style={{width: 30, marginLeft: 10}}>
              <TextInput
                style={{textAlign: 'center', fontSize: 20}}
                maxLength={1}
                keyboardType={'numeric'}
                secureTextEntry={true}
                ref={input => {
                  this.secondTextInput = input;
                }}
                onChangeText={() => {
                  this.thirdTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </Item>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Item style={{width: 30, marginRight: 10}}>
              <TextInput
                style={{textAlign: 'center', fontSize: 20}}
                maxLength={1}
                keyboardType={'numeric'}
                secureTextEntry={true}
                ref={input => {
                  this.thirdTextInput = input;
                }}
                onChangeText={() => {
                  this.fourthTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </Item>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Item style={{width: 30, marginRight: 40}}>
              <TextInput
                style={{textAlign: 'center', fontSize: 20}}
                maxLength={1}
                keyboardType={'numeric'}
                secureTextEntry={true}
                ref={input => {
                  this.fourthTextInput = input;
                }}
                onChangeText={() => {
                  this.fifthTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </Item>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Item style={{width: 30, marginRight: 40}}>
              <TextInput
                style={{textAlign: 'center', fontSize: 20}}
                maxLength={1}
                keyboardType={'numeric'}
                secureTextEntry={true}
                ref={input => {
                  this.fifthTextInput = input;
                }}
                onChangeText={() => {
                  this.lastTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </Item>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Item style={{width: 30, marginRight: 40}}>
              <TextInput
                style={{textAlign: 'center', fontSize: 20}}
                maxLength={1}
                keyboardType={'numeric'}
                secureTextEntry={true}
                ref={input => {
                  this.lastTextInput = input;
                }}
              />
            </Item>
          </View>
        </View>
        <View style={{marginTop: 80, alignSelf: 'center'}}>
          <View>
            <Text style={{fontWeight: 'bold', color: '#3498db'}}>
              LUPA SECURITY CODE ?
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(SecurityCode);
// export default SecurityCode;
