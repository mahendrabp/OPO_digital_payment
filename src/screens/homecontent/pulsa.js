/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, Dimensions, BackHandler} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {
  Button,
  Header,
  Left,
  Body,
  Right,
  Title,
  Tab,
  Tabs,
  TabHeading,
  Form,
  Item,
  Input,
  Label,
  Picker,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const tsel = require('../../../assets/img/telkomsel.png');

export default class Pulsa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNominalPra: '',
      selectedMethodPra: '',
      selectedMethodPasca: '',
    };
  }
  onValueChangeNominalPra(value) {
    this.setState({
      selectedNominalPra: value,
    });
  }
  onValueChangeMethodPra(value) {
    this.setState({
      selectedMethodPra: value,
    });
  }
  onValueChangeMethodPasca(value) {
    this.setState({
      selectedMethodPasca: value,
    });
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

  handleBackPress = () => {
    this.props.navigation.navigate('MenuTabs');
    return true;
  };
  render() {
    return (
      <ScrollView>
        <View
          style={{borderBottomColor: '#4E2A87', borderBottomWidth: 1, flex: 1}}>
          <Header style={{backgroundColor: '#4E2A87'}} transparent>
            <Left>
              <Button transparent>
                <Icon
                  name="arrow-left"
                  color="#ffffff"
                  size={20}
                  onPress={() => this.props.navigation.navigate('MenuTabs')}
                />
              </Button>
            </Left>
            <Body>
              <Title
                style={{
                  color: '#FCFCFE',
                  fontSize: 20,
                  marginLeft: 15,
                }}>
                PULSA
              </Title>
            </Body>
            <Right />
          </Header>
        </View>
        <View
          style={{
            backgroundColor: '#4E2A87',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={tsel}
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              marginTop: 15,
              marginBottom: 15,
              marginLeft: 15,
              marginRight: 15,
            }}
          />
          <Text style={{color: '#ffffff', fontSize: 20}}>Telkomsel</Text>
        </View>
        <View>
          <Tabs
            tabBarUnderlineStyle={{
              backgroundColor: '#ffffff',
              borderColor: '#4E2A87',
              borderBottomWidth: 2,
            }}>
            <Tab
              heading={
                <TabHeading style={{backgroundColor: '#ffffff'}}>
                  <Text>Prabayar</Text>
                </TabHeading>
              }>
              <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
                <Form>
                  <Item floatingLabel style={{marginBottom: 20}}>
                    <Label>Nomor Ponsel</Label>
                    <Input style={{marginTop: 10}} />
                  </Item>
                  <Item stackedLabel style={{marginBottom: 20}}>
                    <Label>Nominal</Label>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{width: undefined, marginLeft: -8}}
                        placeholder="Pilih Nominal"
                        placeholderStyle={{color: '#bfc6ea'}}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selectedNominalPra}
                        onValueChange={this.onValueChangeNominalPra.bind(this)}>
                        <Picker.Item label="Rp20.000" value="key0" />
                        <Picker.Item label="Rp50.000" value="key1" />
                        <Picker.Item label="Rp100.000" value="key2" />
                        <Picker.Item label="Rp200.000" value="key3" />
                        <Picker.Item label="Rp500.000" value="key4" />
                        <Picker.Item label="Rp1.000.000" value="key4" />
                        <Picker.Item label="Rp5.000.000" value="key4" />
                      </Picker>
                    </Item>
                  </Item>
                  <Item stackedLabel>
                    <Label>Metode Pembayaran</Label>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{width: undefined, marginLeft: -8}}
                        placeholder="Pilih Metode Pembayaran"
                        placeholderStyle={{color: '#bfc6ea'}}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selectedMethodPra}
                        onValueChange={this.onValueChangeMethodPra.bind(this)}>
                        <Picker.Item label="OPO Cash" value="key0" />
                        <Picker.Item label="OPO Points" value="key1" />
                      </Picker>
                    </Item>
                  </Item>
                </Form>
                <Text style={{marginLeft: 15}}>
                  Sisa Saldo OPO Cash{' '}
                  <Text style={{fontWeight: 'bold'}}>Rp10.000.000</Text>
                </Text>
                <View style={{marginTop: 30}}>
                  <Button
                    onPress={() => alert('Coming soon.')}
                    block
                    rounded
                    style={{backgroundColor: '#06B3BA'}}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>
                      Berikutnya
                    </Text>
                  </Button>
                </View>
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading
                  style={{backgroundColor: '#ffffff', borderBottomWidth: 0}}>
                  <Text>Pasca Bayar</Text>
                </TabHeading>
              }>
              <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
                <Form>
                  <Item floatingLabel style={{marginBottom: 20}}>
                    <Label>Nomor Ponsel</Label>
                    <Input style={{marginTop: 10}} />
                  </Item>
                  <Item stackedLabel>
                    <Label>Metode Pembayaran</Label>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{width: undefined, marginLeft: -8}}
                        placeholder="Pilih Metode Pembayaran"
                        placeholderStyle={{color: '#bfc6ea'}}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selectedMethodPasca}
                        onValueChange={this.onValueChangeMethodPasca.bind(
                          this,
                        )}>
                        <Picker.Item label="OPO Cash" value="key0" />
                        <Picker.Item label="OPO Points" value="key1" />
                      </Picker>
                    </Item>
                  </Item>
                </Form>
                <Text style={{marginLeft: 15}}>
                  Sisa Saldo OPO Cash{' '}
                  <Text style={{fontWeight: 'bold'}}>Rp10.000.000</Text>
                </Text>
                <View style={{marginTop: 30}}>
                  <Button
                    onPress={() => alert('Coming soon.')}
                    block
                    rounded
                    style={{
                      backgroundColor: '#06B3BA',
                    }}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>
                      Berikutnya
                    </Text>
                  </Button>
                </View>
              </View>
            </Tab>
          </Tabs>
        </View>
      </ScrollView>
    );
  }
}
