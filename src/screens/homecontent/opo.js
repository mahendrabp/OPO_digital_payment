/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, BackHandler} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

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
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import {getuser} from '../../public/redux/action/users';
import {transfer} from '../../public/redux/action/users';

class OPO extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {},
      Saldo: '',
      phone: '',
      nominal: '',
    }
  }

  componentDidMount() {
    this.getUser()
    // this.setState({user: this.props.user.getUser[0]});
    console.log('=================================================')
    // console.log(auth);
    // console.log(id);
    // console.log(this.props.user.getUser[0].id);
    // console.log(this.state.user)
  }

  getUser = async () => {
    const auth = await AsyncStorage.getItem('Authorization');
    const id = await AsyncStorage.getItem('idUser');
    await this.props.dispatch(getuser(id, auth));
    this.setState({user: this.props.user.getUser[0], saldo:this.props.user.getUser[0].opo_cash});
    // console.log('=================================================')
    // console.log(auth);
    // console.log(id);
    // console.log(this.props.user.getUser[0].opo_cash);
  };

  handleBackPress = () => {
    this.props.navigation.navigate('Transfer');
    return true;
  };

  handleSubmit = async () => {
    if (this.state.phone !== '' && this.state.nominal !== '') {
      await this.props.dispatch(transfer(this.state.phone, this.state.nominal, this.state.user.user_id));
      // console.log(this.state.saldo)
      // console.log(this.props.user.transfer)
      this.setState({saldo: parseInt(this.state.saldo) - parseInt(this.state.nominal)});
    }
    this.setState({
      phone:'',
      nominal:'',
    })
  }

  render() {
    // console.log('===================')
    console.log(this.state.phone)
    console.log(this.state.nominal)
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
              <Label>Masukkan nomor ponsel</Label>
              <Input style={{marginTop: 10}} keyboardType={'numeric'} value={this.state.phone} onChangeText={(val)=>{this.setState({phone:val})}}/>
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
                        <Text style={{fontWeight: 'bold'}}>Rp{this.state.saldo}</Text>
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
                <Input keyboardType={'numeric'} placeholder="Rp0" style={{fontSize: 25}} value={this.state.nominal} onChangeText={(val)=>{this.setState({nominal:val})}}/>
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
                  onPress={() => this.handleSubmit()}
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