/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {
  Header,
  Left,
  Right,
  Body,
  Title,
  Container,
  Button,
  Card,
  Content,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

export default class index extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'purple'}}>
          <Left style={{alignSelf: 'center'}}>
            <Icon name="arrow-left" color="white" size={15} />
          </Left>
          <Title style={{alignSelf: 'center'}}>
            <Text>OPO ID</Text>
          </Title>
          <Right />
        </Header>
        <Content>
          <View>
            <View
              style={{
                width: '100%',
                height: 100,
                left: 0,
                Right: 0,
                top: 0,
                borderBottomWidth: 0.3,
              }}>
              <View
                style={{marginLeft: 10, marginTop: 15, flexDirection: 'row'}}>
                <View>
                  <Icon name="user-circle" size={60} color="gray" />
                </View>
                <View
                  style={{
                    alignSelf: 'center',
                    marginLeft: 10,
                    marginRight: 10,
                  }}>
                  <Text style={{fontSize: 20}}>NAMA USER</Text>
                  <Text style={{fontWeight: 'bold'}}>OPO Club</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                  }}>
                  <Button
                    block
                    style={{borderRadius: 5, backgroundColor: '#22a6b3'}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Upgrade
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
            <View>
              <ScrollView style={{backgroundColor: '#dfe6e9', flexGrow: 1}}>
                <Card
                  style={{
                    backgroundColor: 'white',
                    marginTop: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 10,
                    height: 160,
                    borderRadius: 10,
                    borderWidth: 1,
                  }}>
                  <View style={{marginLeft: 20, marginTop: 10}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 20,
                        marginBottom: 10,
                      }}>
                      Barcode ID
                    </Text>
                    <Image
                      source={require('./../../../../assets/img/Barcode.jpg')}
                      style={{width: '90%', height: 100, resizeMode: 'contain'}}
                    />
                  </View>
                </Card>
                <Card
                  style={{
                    backgroundColor: 'white',
                    marginTop: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 10,
                    height: 300,
                    borderRadius: 10,
                    borderWidth: 1,
                  }}>
                  <View style={{marginLeft: 20, marginTop: 10}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 20,
                        marginBottom: 10,
                      }}>
                      QR Code
                    </Text>
                    <Image
                      source={require('./../../../../assets/img/qrcode.png')}
                      style={{
                        width: '90%',
                        height: '80%',
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                </Card>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 15}}>Nomor Ponsel</Text>
                  <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      XXXX - XXXX - X212
                    </Text>
                    <Button transparent block>
                      <Icon name="eye" color="green" size={30} />
                      <Text
                        style={{marginLeft: 10, fontSize: 20, color: 'green'}}>
                        Tampilkan
                      </Text>
                    </Button>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
