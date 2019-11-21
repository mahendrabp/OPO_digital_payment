/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, BackHandler, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

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
  Picker,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Bank extends Component {
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
  constructor(props) {
    super(props);
    this.state = {
      selectedBank: '',
    };
  }
  onValueChangeBank(value) {
    this.setState({
      selectedBank: value,
    });
  }
  render() {
    return (
      <ScrollView>
        <View>
          <View
            style={{
              borderBottomColor: '#4E2A87',
              borderBottomWidth: 1,
              flex: 1,
            }}>
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
                    marginRight: -50,
                  }}>
                  KE REKENING BANK
                </Title>
              </Body>
              <Right />
            </Header>
          </View>
          <View style={{margin: 20}}>
            <Form>
              <Item stackedLabel>
                <Label>Bank Tujuan</Label>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{width: undefined, marginLeft: -8}}
                    placeholder="Pilih Bank"
                    placeholderStyle={{color: '#bfc6ea'}}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedBank}
                    onValueChange={this.onValueChangeBank.bind(this)}>
                    <Picker.Item label="Bank BRI" value="key0" />
                    <Picker.Item label="BANK MANDIRI" value="key1" />
                    <Picker.Item label="BANK BCA" value="key2" />
                    <Picker.Item label="BANK BNI" value="key3" />
                  </Picker>
                </Item>
              </Item>
              <View>
                <Item floatingLabel style={{marginLeft: 17}}>
                  <Label>Nomor Rekening</Label>
                  <Input style={{marginTop: 10}} />
                </Item>
              </View>
              <View>
                <Text style={{marginLeft: 12, color: '#7A848B', marginTop: 25}}>
                  Sumber Dana
                </Text>
                <Card style={{marginLeft: 12, borderRadius: 10}}>
                  <CardItem>
                    <View
                      style={{flexDirection: 'row', flex: 1, marginLeft: 5}}>
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
                          <Text style={{fontWeight: 'bold'}}>Rp1.000.000</Text>
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
        </View>
      </ScrollView>
    );
  }
}
