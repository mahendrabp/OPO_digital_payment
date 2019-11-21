/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, BackHandler} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import {
  Button,
  Header,
  Left,
  Body,
  Right,
  Title,
  Input,
  Label,
  Form,
  Item,
  Card,
  CardItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

class OPO extends Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    this.props.navigation.navigate('Transfer');
    return true;
  };
  render() {
    return (
      <ScrollView>
        <View
          style={{borderBottomColor: '#4E2A87', borderBottomWidth: 1, flex: 1}}>
          <Header
            style={{
              backgroundColor: '#4E2A87',
              marginTop: 15,
            }}
            transparent>
            <Left>
              <Button transparent>
                <Icon
                  name="arrow-left"
                  color="#ffffff"
                  size={20}
                  onPress={() => this.props.navigation.navigate('Transfer')}
                />
              </Button>
            </Left>
            <Body>
              <Title
                style={{
                  color: '#FCFCFE',
                  fontSize: 18,
                  marginLeft: 15,
                  marginRight: -30,
                }}>
                KE SESAMA OPO
              </Title>
            </Body>
            <Right />
          </Header>
        </View>
        <View style={{margin: 20}}>
          <Form>
            <Item floatingLabel style={{marginBottom: 20}}>
              <Label>Masukkan nama atau nomor ponsel</Label>
              <Input style={{marginTop: 10}} />
            </Item>
            <View>
              <Text style={{marginLeft: 12, color: '#7A848B', marginTop: 15}}>
                Sumber Dana
              </Text>
              <Card style={{marginLeft: 12, borderRadius: 10}}>
                <CardItem>
                  <View style={{flexDirection: 'row', flex: 1, marginLeft: 5}}>
                    <View
                      style={{
                        backgroundColor: '#4E2A87',
                        marginRight: 10,
                        justifyContent: 'center',
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{
                          color: '#ffffff',
                          fontWeight: 'bold',
                          marginLeft: 10,
                          marginRight: 10,
                        }}>
                        OPO
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontWeight: 'bold'}}>OPO Cash</Text>
                      <Text>
                        Saldo{' '}
                        <Text style={{fontWeight: 'bold'}}>
                          {this.props.user.getUser[0].opo_cash}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </CardItem>
              </Card>
            </View>
            <View
              style={{
                backgroundColor: '#F8F8F8',
                marginTop: 20,
                marginLeft: 12,
                marginBottom: 10,
                padding: 10,
              }}>
              <Item stackedLabel>
                <Label>Nominal Transfer</Label>
                <Input placeholder="Rp0" style={{fontSize: 25}} />
              </Item>
            </View>
            <View>
              <Item floatingLabel style={{marginLeft: 17}}>
                <Label>Pesan (opsional)</Label>
                <Input style={{marginTop: 10}} />
              </Item>
            </View>
            <TouchableOpacity>
              <View style={{marginTop: 30}}>
                <Button
                  onPress={() => alert('Coming soon.')}
                  block
                  rounded
                  style={{
                    backgroundColor: '#06B3BA',
                  }}>
                  <Text style={{color: '#ffffff', fontSize: 20}}>
                    Konfirmasi
                  </Text>
                </Button>
              </View>
            </TouchableOpacity>
          </Form>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(OPO);
