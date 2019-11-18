import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Content, List, ListItem, Button} from 'native-base';

class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.marginVieeChildToParent}>
          <Text style={styles.textStyle}>Akun</Text>
          <List>
            <ListItem>
              <Text style={styles.textBlack}>Edit Profil</Text>
            </ListItem>
            <ListItem>
              <Text style={styles.textBlack}>Kode Promo</Text>
            </ListItem>
          </List>
        </View>
        <View style={{marginTop: 37, marginRight: 18}}>
          <Text style={styles.textStyle}>Keamanan</Text>
          <List>
            <ListItem>
              <Text style={styles.textBlack}>Ubah Security Kode</Text>
            </ListItem>
          </List>
        </View>
        <View style={{marginTop: 37, marginRight: 18}}>
          <Text style={styles.textStyle}>Tentang</Text>
          <List>
            <ListItem>
              <Text style={styles.textBlack}>Tentang OVO</Text>
            </ListItem>
            <ListItem>
              <Text style={styles.textBlack}>Kebijakan Privasi</Text>
            </ListItem>
            <ListItem>
              <Text style={styles.textBlack}>Pusat Bantuan</Text>
            </ListItem>
          </List>
        </View>
        <View style={{marginTop: 7}}>
          <Text style={styles.textStyleVersion}>Version 1.0.0(001)</Text>
        </View>
        <View style={styles.viewButton}>
          <Button bordered block rounded style={styles.buttonSigOut}>
            <Text style={styles.textSignOut}>SIGN OUT</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  marginVieeChildToParent: {marginTop: 22, marginRight: 18},
  textStyle: {color: '#4E2A87', fontWeight: 'bold', marginLeft: 18},
  textBlack: {color: '#2D253B'},
  textStyleVersion: {color: '#6D7680', fontSize: 12, marginLeft: 18},
  viewButton: {marginTop: 20, marginHorizontal: 30},
  buttonSigOut: {borderColor: '#07B2BD'},
  textSignOut: {color: '#07B2BD'},
});

export default SettingScreen;
