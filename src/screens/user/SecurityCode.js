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
  Alert,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {loginstep2} from '../../public/redux/action/users';
class SecurityCode extends Component {
  constructor(props) {
    super(props);
    this.secondTextInput = null;
    this.state = {
      isPhoneValid: false,
      isButton: false,
      number: '',
      phone: props.user.resultStep1.phone,
      securityCode: '',
      input: '',
    };
  }

  // goSubmit = async () => {
  //   const {phone, securityCode} = this.state;
  //   const stringSecuritycode = this.state.input.toString().replace(/,/g, '');
  //   // this.setState({
  //   //   securityCode: stringSecuritycode,
  //   // });
  //   // // Alert.alert('Perhatian!', 'Success Login');
  //   await this.props.dispatch(loginstep2({phone, stringSecuritycode}));
  //   await this.props.navigation.navigate('HelpScreen');
  // };

  goSubmit = async () => {
    const {phone} = this.state;
    const securityCode = this.state.input.toString().replace(/,/g, '');
    // console.log(this.state.phone);

    if (securityCode.length === 6) {
      await this.props.dispatch(loginstep2({phone, securityCode}));
      await this.props.navigation.navigate('MenuTabs');
    }
  };

  componentDidMount() {
    // console.log(this.props.user.resultStep1);
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
    // console.log(this.props.user);
  }

  goBack = () => {
    this.props.navigation.navigate('OTP');
  };

  goMenu = () => {
    this.props.navigation.navigate('MenuTabs');
  };

  handleBackPress = () => {
    this.goBack();
    return true;
  };

  // goSecure = () => {
  //   const input = this.state.input.toString().replace(/,/g, '');
  //   // console.log(this.state.otp);
  //   if (this.state.securityCode === input) {
  //     console.log('true');
  //     this.props.navigation.navigate('SecurityCode');
  //   }
  // };

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
                onChangeText={input => {
                  this.setState({
                    input: [...this.state.input, input],
                  });
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
                onChangeText={input => {
                  this.setState({
                    input: [...this.state.input, input],
                  });
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
                onChangeText={input => {
                  this.setState({
                    input: [...this.state.input, input],
                  });
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
                onChangeText={input => {
                  this.setState({
                    input: [...this.state.input, input],
                  });
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
                onChangeText={input => {
                  this.setState({
                    input: [...this.state.input, input],
                  });
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
                // onChangeText={input => {
                //   this.setState({
                //     input: [...this.state.input, input],
                //   });
                // }}

                // onChangeText={input => {
                //   this.setState({input: [...this.state.input, input]});
                //   this.goSubmit;
                // }}
                // onSubmitEditing={this.goSubmit}
                onChangeText={input => {
                  console.log(input);
                  this.setState(
                    {
                      input: [...this.state.input, input],
                    },
                    function() {
                      this.goSubmit();
                    },
                  );
                  // this.lastOne.focus();
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
