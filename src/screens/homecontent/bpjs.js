/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, BackHandler} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {
  Button,
  Header,
  Left,
  Body,
  Right,
  Title,
  Form,
  Item,
  Input,
  Label,
  Picker,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const bpjs = require('../../../assets/img/bpjs.jpg');

export default class BPJS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNominalPra: '',
      selectedMethodPra: '',
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
                BPJS KESEHATAN
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
            source={bpjs}
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
          <Text style={{color: '#ffffff', fontSize: 20}}>BPJS Kesehatan</Text>
        </View>
        <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
          <Form>
            <Item floatingLabel style={{marginBottom: 20}}>
              <Label>Nomor BPJS</Label>
              <Input style={{marginTop: 10}} />
            </Item>
            <Item stackedLabel style={{marginBottom: 20}}>
              <Label>Sampai Dengan</Label>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined, marginLeft: -8}}
                  placeholder="Pilih Bulan"
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selectedNominalPra}
                  onValueChange={this.onValueChangeNominalPra.bind(this)}>
                  <Picker.Item label="November 2019" value="key0" />
                  <Picker.Item label="Desember 2019" value="key1" />
                  <Picker.Item label="Januari 2020" value="key2" />
                  <Picker.Item label="Februari 2020" value="key3" />
                  <Picker.Item label="Maret 2020" value="key4" />
                  <Picker.Item label="April 2020" value="key5" />
                  <Picker.Item label="Mei 2020" value="key6" />
                  <Picker.Item label="Juni 2020" value="key7" />
                  <Picker.Item label="Juli 2020" value="key8" />
                  <Picker.Item label="Agustus 2020" value="key9" />
                  <Picker.Item label="September 2020" value="key10" />
                  <Picker.Item label="Oktober 2020" value="key11" />
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
              <Text style={{color: '#ffffff', fontSize: 20}}>Berikutnya</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
