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
class SecurityCodeRegister extends Component {
  constructor(props) {
    super(props);
    this.secondTextInput = null;
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  goBack = () => {
    this.props.navigation.navigate('OTPRegister');
  };

  goMenu = () => {
    this.props.navigation.navigate('MenuTabs');
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
            <Title style={{fontSize: 15}}>SIGN UP</Title>
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
                onChangeText={() => {
                  this.goMenu();
                }}
                blurOnSubmit={false}
              />
            </Item>
          </View>
        </View>
      </Container>
    );
  }
}

export default SecurityCodeRegister;
