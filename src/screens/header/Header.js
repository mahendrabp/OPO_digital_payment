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
            <Title>OPO</Title>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddJob')}>
              <Button transparent>
                <Icon name="plus-circle" color="#0000ff" size={25} />
                <Text>Add Job</Text>
              </Button>
            </TouchableOpacity>
          </Right>
        </Header>
      </View>
    );
  }
}

export default MyHeader;
