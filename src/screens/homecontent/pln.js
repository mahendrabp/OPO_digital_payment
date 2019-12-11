/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, Dimensions, BackHandler, Alert} from 'react-native';
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
import {connect} from 'react-redux';
import axios from 'axios';
import {NavigationEvents} from 'react-navigation';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const imgPLN = require('../../../assets/img/PLN.jpg');

class PLN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNominalPra: '',
      // opoType: '',
      selectedMethodPasca: '',
      nominal: 0,
      merchantId: '1',
      opoType: '',
      transactionType: 'prabayar',
      isDisable: true,
      saldo: this.props.user.getUser[0].opo_cash,
    };
  }
  onValueChangeNominalPra(value) {
    if (value === 0) {
      this.setState({
        isDisable: true,
      });
    } else {
      this.setState({
        nominal: value,
        isDisable: false,
      });
    }

    console.log(this.state.nominal);
  }
  onValueChangeMethodPra(value) {
    this.setState({
      opoType: value,
    });
  }
  // componentDidMount() {
  //   console.log(this.props.user.getUser[0].user_id);
  // }
  onValueChangeMethodPasca(value) {
    this.setState({
      opoType: value,
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

  addPpobPLN() {
    const {nominal, merchantId, opoType, transactionType} = this.state;
    console.log(nominal);
    console.log(merchantId);
    console.log(opoType);
    console.log(transactionType);

    axios
      .post(
        `http://54.175.184.232:5050/api/v1/balance/ppob/out/${this.props.user.getUser[0].user_id}`,
        {
          // eslint-disable-next-line radix
          nominal: parseInt(nominal),
          merchantId: merchantId,
          opoType: opoType,
          transactionType: transactionType,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => {
        console.log(response);
        this.alertSuccess();
      })
      .catch(error => {
        console.log(error);
      });
  }

  alertSuccess() {
    Alert.alert(`pembayaran PLN sebesar ${this.state.nominal} Telah berhasil`);
    this.setState({
      saldo: this.props.user.getUser[0].opo_cash - this.state.nominal,
    });
  }

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
                PLN
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
            source={imgPLN}
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
          <Text style={{color: '#ffffff', fontSize: 25}}>PLN</Text>
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
                    <Label>Nomor Meter</Label>
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
                        selectedValue={this.state.nominal}
                        onValueChange={this.onValueChangeNominalPra.bind(this)}>
                        <Picker.Item label="Pilih Nominal" value="0" />
                        <Picker.Item label="Rp20.000" value="20000" />
                        <Picker.Item label="Rp50.000" value="50000" />
                        <Picker.Item label="Rp100.000" value="100000" />
                        <Picker.Item label="Rp200.000" value="200000" />
                        <Picker.Item label="Rp500.000" value="500000" />
                        <Picker.Item label="Rp1.000.000" value="1000000" />
                        <Picker.Item label="Rp5.000.000" value="5000000" />
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
                        selectedValue={this.state.opoType}
                        onValueChange={this.onValueChangeMethodPra.bind(this)}>
                        <Picker.Item
                          label="Pilih Metode Pembayaran"
                          value="opo_cash"
                        />
                        <Picker.Item label="OPO Cash" value="opo_cash" />
                        <Picker.Item label="OPO Points" value="opo_point" />
                      </Picker>
                    </Item>
                  </Item>
                </Form>
                <Text style={{marginLeft: 15}}>
                  Sisa Saldo OPO Cash{' '}
                  <Text style={{fontWeight: 'bold'}}>
                    {/* {this.props.user.getUser[0].opo_cash} */}
                    {this.state.saldo}
                  </Text>
                </Text>
                <View style={{marginTop: 30}}>
                  <Button
                    disabled={this.state.isDisable ? true : false}
                    onPress={() => this.addPpobPLN()}
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
                    <Label>ID Pelanggan</Label>
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
                        selectedValue={this.state.opoType}
                        onValueChange={this.onValueChangeMethodPasca.bind(
                          this,
                        )}>
                        <Picker.Item label="OPO Cash" value="opo_cash" />
                        <Picker.Item label="OPO Points" value="opo_point" />
                      </Picker>
                    </Item>
                  </Item>
                </Form>
                <Text style={{marginLeft: 15}}>
                  Sisa Saldo OPO Cash{' '}
                  <Text style={{fontWeight: 'bold'}}>
                    {/* {this.props.user.getUser} */}
                  </Text>
                </Text>
                <View style={{marginTop: 30}}>
                  <Button
                    disabled
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

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(PLN);
