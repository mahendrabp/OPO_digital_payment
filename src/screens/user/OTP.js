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
class OTP extends Component {
  constructor(props){
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
    this.props.navigation.navigate('LoginScreen');
  };

  goSecure = () => {
    this.props.navigation.navigate('SecurityCode');
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
            Masukkan Kode{' '}
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginTop: 20,
            }}>
            {' '}
            Kami telah mengirimkan kode ke{' '}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              textAlign: 'center',
            }}>
            {' '}
            081293823938{' '}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Item style={{width: 50, marginLeft: 40}}>
                <TextInput
                  style={{textAlign: 'center', fontSize: 20}}
                  maxLength={1}
                  keyboardType={'numeric'}
                  onChangeText={() => {
                    this.secondTextInput.focus();
                  }}
                  blurOnSubmit={false}
                />
              </Item>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Item style={{width: 50, marginLeft: 10}}>
                <TextInput
                  style={{textAlign: 'center', fontSize: 20}}
                  maxLength={1}
                  keyboardType={'numeric'}
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
              <Item style={{width: 50, marginRight: 10}}>
                <TextInput
                  style={{textAlign: 'center', fontSize: 20}}
                  maxLength={1}
                  keyboardType={'numeric'}
                  ref={input => {
                    this.thirdTextInput = input;
                  }}
                  onChangeText={() => {
                    this.lastTextInput.focus();
                  }}
                  blurOnSubmit={false}
                />
              </Item>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Item style={{width: 50, marginRight: 40}}>
                <TextInput
                  style={{textAlign: 'center', fontSize: 20}}
                  maxLength={1}
                  keyboardType={'numeric'}
                  ref={input => {
                    this.lastTextInput = input;
                  }}
                  onChangeText={() => {
                    this.goSecure()
                  }}
                  blurOnSubmit={false}
                />
              </Item>
            </View>
          </View>
          <View>
            <Text style={{textAlign: 'center', marginTop: 30, opacity: 0.5}}>
              Aplikasi OPO dilindungi dengan sistem proteksi terkini
            </Text>
          </View>
          <View
            style={{marginTop: 20, flexDirection: 'row', alignSelf: 'center'}}>
            <View>
              <Text style={{fontWeight: 'bold', color: '#3498db'}}>
                KIRIM ULANG
              </Text>
            </View>
            <View style={{marginLeft: 5}}>
              <Text style={{fontWeight: 'bold', color: '#000'}}>(60)</Text>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default OTP;
