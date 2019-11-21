/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, BackHandler} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

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
  Card,
  CardItem,
  Input,
  Label,
  Picker,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const imgTransc = require('../../../assets/img/transaksi.png');
const imgFav = require('../../../assets/img/favorit.png');

export default class Transfer extends Component {
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
                TRANSFER
              </Title>
            </Body>
            <Right />
          </Header>
        </View>
        <View>
          <Tabs
            tabBarUnderlineStyle={{
              backgroundColor: '#4E2A87',
              borderColor: '#06B3BA',
              borderBottomWidth: 3,
            }}>
            <Tab
              heading={
                <TabHeading
                  style={{backgroundColor: '#4E2A87', borderBottomWidth: 0}}>
                  <Text style={{color: '#ffffff'}}>Penerima Baru</Text>
                </TabHeading>
              }>
              <View style={{backgroundColor: '#F8F8F8'}}>
                <View
                  style={{
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('OPO')}>
                    <Card style={{borderRadius: 10}}>
                      <CardItem style={{margin: 10}}>
                        <Icon
                          active
                          name="mobile-alt"
                          color="#3BC3C9"
                          size={30}
                          style={{marginLeft: 5}}
                        />
                        <Text style={{marginLeft: 25, fontSize: 15}}>
                          Ke Sesama OPO
                        </Text>
                        <Right>
                          <Icon
                            name="chevron-right"
                            color="#B2B8BC"
                            size={20}
                          />
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Bank')}>
                    <Card style={{borderRadius: 10}}>
                      <CardItem style={{margin: 10}}>
                        <Icon
                          active
                          name="university"
                          color="#3BC3C9"
                          size={30}
                        />
                        <Text style={{marginLeft: 20, fontSize: 15}}>
                          Ke Rekening Bank
                        </Text>
                        <Right>
                          <Icon
                            name="chevron-right"
                            color="#B2B8BC"
                            size={20}
                          />
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginLeft: 20, marginTop: 30}}>
                <Text
                  style={{color: '#2D263B', fontSize: 20, fontWeight: 'bold'}}>
                  Transaksi Terakhir
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={imgTransc} />
                <Text style={{color: '#6B767E', fontSize: 15, marginTop: 20}}>
                  Belum ada transaksi saat ini{' '}
                </Text>
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading
                  style={{backgroundColor: '#4E2A87', borderBottomWidth: 0}}>
                  <Text style={{color: '#ffffff'}}>Favorit</Text>
                </TabHeading>
              }>
              <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
                <View style={{alignItems: 'center'}}>
                  <Image source={imgFav} />
                  <Text style={{color: '#6B767E', fontSize: 15, marginTop: 20}}>
                    Anda belum punya daftar favorit{' '}
                  </Text>
                </View>
              </View>
            </Tab>
          </Tabs>
        </View>
      </ScrollView>
    );
  }
}
