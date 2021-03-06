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

const tsel = require('../../../assets/img/telkomsel.png');

export default class PaketData extends Component {
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
                PAKET DATA
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
        <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
          <Form>
            <Item floatingLabel style={{marginBottom: 20}}>
              <Label>Nomor Ponsel</Label>
              <Input style={{marginTop: 10}} />
            </Item>
            <Item stackedLabel style={{marginBottom: 20}}>
              <Label>Jenis Paket</Label>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined, marginLeft: -8}}
                  placeholder="Pilih Paket"
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selectedNominalPra}
                  onValueChange={this.onValueChangeNominalPra.bind(this)}>
                  <Picker.Item
                    label="Telkomsel Data 40MB-110MB (Sesuai zona terkait)"
                    value="key0"
                  />
                  <Picker.Item
                    label="Telkomsel Data 200MB-420MB (Sesuai zona terkait)"
                    value="key1"
                  />
                  <Picker.Item
                    label="Data 300MB-750MB + Videomax 1GB. Masa aktif 30 hari"
                    value="key2"
                  />
                  <Picker.Item
                    label="800MB-1.5 GB + 1GB midnight + 3GB Videomax. Masa aktif 30 hari"
                    value="key3"
                  />
                  <Picker.Item
                    label="Data 12GB kuota utama di semua jaringan dan zona"
                    value="key4"
                  />
                  <Picker.Item
                    label="Data 50GB kuota utama di semua jaringan dan zona"
                    value="key4"
                  />
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
