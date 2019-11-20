import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Finance extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#ffffff'}}>
        <View
          style={{
            backgroundColor: '#07B2BB',
            height: '55%',
            marginTop: '5%',
            alignSelf: 'center',
            width: '90%',
            flexDirection: 'row',
            elevation: 7,
            borderRadius: 20,
          }}>
          <View
            style={{
              flex: 2,
              backgroundColor: '#07B2BB',
              alignContent: 'space-between',
              padding: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="signal" color={'white'} style={{marginRight: '2%'}} />
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                Upgrade ke OVO Premiere
              </Text>
            </View>
            <View style={{marginTop: '5%'}}>
              <Text style={{color: 'white', fontSize: 12}}>
                Nikmati Fitur Transfer,Atur Budget, dan Batas Saldo sampai
                dengan Rp.10.000.000
              </Text>
            </View>
            <View>
              <Button
                block
                rounded
                style={{
                  backgroundColor: '#FFFEFF',
                  width: '45%',
                  height: '27%',
                  marginTop: '35%',
                  marginLeft: '5%',
                }}>
                <Text style={{color: '#07B2BB', fontWeight: 'bold'}}>
                  MULAI
                </Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#07B2BB',
              justifyContent: 'center',
            }}>
            <Icon name="hand-pointer" style={{color: 'white'}} size={75} />
          </View>
        </View>
      </View>
    );
  }
}
