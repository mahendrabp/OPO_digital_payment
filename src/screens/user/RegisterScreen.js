import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Form, Item, Input, Label, Body, ListItem, Button} from 'native-base';
import CheckBox from '@react-native-community/checkbox';
import {bold} from 'ansi-colors';

const Strong = props => <Text style={styles.boldFont}>{props.children}</Text>;
const Blue = props => <Text style={styles.blueColor}>{props.children}</Text>;

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      referral: '',

      isEmailValid: true,
      isNameValid: true,
      isPhoneValid: true,

      value: '',
      secureTextEntry: true,
    };
  }

  _renderError = () => {
    if (!this.state.isEmailValid) {
      return 'error';
    }
  };

  onChangeEmail = value => {
    let validationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validationRegex.test(value) === false) {
      this.setState({
        email: value,
        isEmailValid: false,
        invalidMessage: 'email tidak valid',
      });
    } else if (value === '' || value === null) {
      this.setState({
        email: value,
        isEmailValid: false,
        invalidMessage: 'email tidak boleh kosong',
      });
    } else {
      this.setState({
        email: value,
        isEmailValid: true,
      });
    }
  };

  onChangeName = value => {
    if (value === '' || value === null) {
      this.setState({
        name: value,
        isNameValid: false,
        invalidMessage: 'name tidak boleh kosong',
      });
    } else {
      this.setState({
        name: value,
        isNameValid: true,
      });
    }
  };

  onChangePhone = value => {
    let validationRegex = /^08[0-9]{9,}$/;
    if (validationRegex.test(value) === false) {
      this.setState({
        phone: value,
        isPhoneValid: false,
        invalidMessage: 'no telepon tidak valid',
      });
    } else if (value === '' || value === null) {
      this.setState({
        phone: value,
        isPhoneValid: false,
        invalidMessage: 'no telepon tidak boleh kosong',
      });
    } else {
      this.setState({
        phone: value,
        isPhoneValid: true,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <Text style={styles.fontSize}>
            Terimakasih telah bergabung! Kami akan mengirim kode melalui{' '}
            <Strong>SMS</Strong> dan <Strong>email</Strong> untuk proses
            verifikasi registrasi
          </Text>
        </View>
        <View style={styles.wrapperForm}>
          <Form>
            <Item error floatingLabel>
              <Label style={styles.fontSize}>Nama Lengkap</Label>
              <Input onChangeText={value => this.onChangeName(value)} />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.fontSize}>Nomor Ponsel</Label>
              <Input onChangeText={value => this.onChangePhone(value)} />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.fontSize}>Email</Label>
              <Input
                onChangeText={value => this.onChangeEmail(value)}
                value={this.state.email}
              />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.fontSize}>
                Kode Promosi/Referesi: (optional)
              </Label>
              <Input />
            </Item>
            <View style={styles.agreementStyle}>
              <CheckBox checked={false} style={styles.blueColor} />
              <Text style={styles.agreementText}>
                Saya setuju dengan{' '}
                <Strong>
                  <Blue>Syarat & Ketentuan</Blue>
                </Strong>
              </Text>
            </View>
          </Form>
        </View>
        <View style={styles.buttonWrapper}>
          <Button block style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>BERIKUTNYA</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: '#FFFFFF'},
  boldFont: {fontWeight: 'bold'},
  blueColor: {color: '#4EAFC5'},
  wrapperHeader: {marginTop: 20, marginHorizontal: 20},
  fontSize: {fontSize: 15},
  wrapperForm: {marginTop: 0, marginHorizontal: 10},
  buttonBorder: {borderWidth: 1},
  agreementStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  agreementText: {alignContent: 'center', alignItems: 'center'},
  buttonWrapper: {
    marginTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#4298AD',
    borderRadius: 20,
    width: 300,
  },
  buttonTextStyle: {color: '#ffffff', textAlign: 'center'},
});

export default RegisterScreen;
