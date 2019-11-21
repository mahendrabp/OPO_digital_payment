/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, CardItem, Body} from 'native-base';

import styles from './style';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

export default class Wallet extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewWallet}>
          <TouchableOpacity>
            <Card style={styles.cardWallet}>
              <CardItem style={{backgroundColor: '#4E2A87', borderRadius: 10}}>
                <Body>
                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 20,
                      color: '#ffffff',
                      fontWeight: 'bold',
                    }}>
                    OPO
                  </Text>
                  <Text
                    style={{
                      color: '#ffffff',
                      marginTop: 10,
                      marginBottom: 10,
                      fontSize: 19,
                    }}>
                    1234 - 5678 - 9012 - 345
                  </Text>
                  <Text
                    style={{color: '#ffffff', marginBottom: 20, marginTop: 10}}>
                    NAMA USER NYA
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <View>
            <Text>Sentuh pada kartu untuk melihat detail</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
