import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Content, List, ListItem, Button} from 'native-base';

class SettingScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{marginTop: 22, marginRight: 18}}>
          <Text style={{color: '#4E2A87', fontWeight: 'bold', marginLeft: 18}}>
            Akun
          </Text>
          <List>
            <ListItem>
              <Text style={{color: '#2D253B'}}>Edit Profil</Text>
            </ListItem>
            <ListItem>
              <Text style={{color: '#2D253B'}}>Kode Promo</Text>
            </ListItem>
          </List>
        </View>
        <View style={{marginTop: 37, marginRight: 18}}>
          <Text style={{color: '#4E2A87', fontWeight: 'bold', marginLeft: 18}}>
            Keamanan
          </Text>
          <List>
            <ListItem>
              <Text style={{color: '#2D253B'}}>Ubah Security Kode</Text>
            </ListItem>
          </List>
        </View>
        <View style={{marginTop: 37, marginRight: 18}}>
          <Text style={{color: '#4E2A87', fontWeight: 'bold', marginLeft: 18}}>
            Tentang
          </Text>
          <List>
            <ListItem>
              <Text style={{color: '#2D253B'}}>Tentang OVO</Text>
            </ListItem>
            <ListItem>
              <Text style={{color: '#2D253B'}}>Kebijakan Privasi</Text>
            </ListItem>
            <ListItem>
              <Text style={{color: '#2D253B'}}>Pusat Bantuan</Text>
            </ListItem>
          </List>
        </View>
        <View style={{marginTop: 7}}>
          <Text style={{color: '#6D7680', fontSize: 12, marginLeft: 18}}>
            Version 1.0.0(001)
          </Text>
        </View>
        <View style={{marginTop: 20, marginHorizontal: 30}}>
          <Button bordered block rounded style={{borderColor: '#07B2BD'}}>
            <Text style={{color: '#07B2BD'}}>SIGN OUT</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default SettingScreen;
