/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {
  Container,
  Button,
  Header,
  Left,
  Body,
  Right,
  Item,
  Title,
  Card,
  CardItem,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import styles from './style';

class MyHeader extends Component {
  render() {
    return (
      <View>
        <Header style={{backgroundColor: '#4E2A87'}}>
          <Left />
          <Body>
            <Title
              style={{
                color: '#FCFCFE',
                marginLeft: -50,
                fontWeight: 'bold',
                fontSize: 25,
              }}>
              OPO
            </Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Button transparent>
                <Icon name="plus-circle" color="#B3A4C9" size={25} />
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button transparent>
                <Icon name="cog" color="#B3A4C9" size={30} />
              </Button>
            </TouchableOpacity>
          </Right>
        </Header>
      </View>
    );
  }
}

export default MyHeader;
