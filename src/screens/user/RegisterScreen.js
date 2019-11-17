import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Form, Item, Input, Label, Body, ListItem, Button} from 'native-base';
import CheckBox from '@react-native-community/checkbox';
import {bold} from 'ansi-colors';

const Strong = props => (
  <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
);
const Blue = props => <Text style={{color: '#4EAFC5'}}>{props.children}</Text>;

class RegisterScreen extends Component {
  render() {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
        <View style={{marginVertical: 20, marginHorizontal: 20}}>
          <Text style={{fontSize: 15}}>
            Terimakasih telah bergabung! Kami akan mengirim kode melalui{' '}
            <Strong>SMS</Strong> dan <Strong>email</Strong> untuk proses
            verifikasi registrasi
          </Text>
        </View>
        <View>
          <Form>
            <Item floatingLabel style={{borderWidth: 1}}>
              <Label>Nama Lengkap</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Nomor Ponsel</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Kode Promosi/Referesi: (optional)</Label>
              <Input />
            </Item>
            <View style={{flexDirection: 'row'}}>
              <CheckBox checked={false} style={{color: '#4EAFC5'}} />
              <Text>
                Saya setuju denngan{' '}
                <Strong>
                  <Blue>Syarat & Ketentuan</Blue>
                </Strong>
              </Text>
            </View>
          </Form>
        </View>
        <View style={{alignItems: 'center'}}>
          <Button
            style={{
              backgroundColor: '#4298AD',
              borderRadius: 20,
              paddingHorizontal: 18,
            }}>
            <Text style={{color: '#ffffff'}}>BERIKUTNYA</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default RegisterScreen;
