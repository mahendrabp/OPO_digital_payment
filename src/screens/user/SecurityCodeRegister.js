/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, BackHandler, TextInput} from 'react-native';
import {connect} from 'react-redux'
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
import {signupstep2} from '../../public/redux/action/users';
class SecurityCodeRegister extends Component {
  constructor(props) {
    super(props);
    this.secondTextInput = null;
    this.state = {
      isPhoneValid: false,
      isButton: false,
      number: '',
      phone: props.user.resultSignUpStep1.phone,
      name: props.user.resultSignUpStep1.name,
      email: props.user.resultSignUpStep1.email,
      securityCode: '',
      input: '',
    };
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

  goSubmit = async () => {
    const {phone, name, email} = this.state;
    const securityCode = this.state.input.toString().replace(/,/g, '');
    // console.log(this.state.phone);

    if (securityCode.length === 6) {
      await this.props.dispatch(signupstep2({phone, securityCode, name, email}));
      await this.props.navigation.navigate('MenuTabs')
    }
  };

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
            Masukkan Security Code Baru Anda{' '}
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
                onChangeText={input => {
                  this.setState({
                    input: [...this.state.input, input],
                  });
                }}
                // onChangeText={input => {
                //   this.setState({input: [...this.state.input, input]});
                //   this.goSubmit;
                // }}
                onSubmitEditing={this.goSubmit}
              />
            </Item>
          </View>
        </View>
      </Container>
    );
  }
}

// export default SecurityCodeRegister;

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(SecurityCodeRegister);
// export default SecurityCode;
