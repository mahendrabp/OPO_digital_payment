import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Right,
} from 'native-base';

const actions = [
  {
    text: 'Tarik Tunai',
    textBackground: '#141E6C',
    textColor: '#ffffff',
    icon: <Icon name="cash-register" color={'white'} />,
    name: 'bt_tariktunai',
    position: 1,
    color: '#141E6C',
    size: 20,
  },
  {
    text: 'Pay Bill',
    textBackground: '#B7BC01',
    textColor: '#ffffff',
    icon: <Icon name="file-invoice-dollar" color={'white'} />,
    name: 'bt_paybill',
    position: 2,
    color: '#B7BC01',
  },
  {
    text: 'Transfer',
    textBackground: '#FEB635',
    textColor: '#ffffff',
    icon: <Icon name="exchange-alt" color={'white'} />,
    name: 'bt_transfer',
    position: 3,
    color: '#FEB635',
  },
  {
    text: 'Top Up',
    textBackground: '#4E2A87',
    textColor: '#ffffff',
    icon: <Icon name="cart-plus" color={'white'} />,
    name: 'bt_topup',
    position: 4,
    color: '#4E2A87',
  },
];

class HistCard extends React.Component {
  constructor() {
    super();
    this.state = {
      newResult: [
        {
          id: '1838ad69-cab4-432d-9446-56344744735f',
          name: 'Bima',
          phone: '0812304560789',
          email: 'Bima@gmail.com',
          security_code:
            '$2b$10$FJgcOifT4m4OWTIIRCJxZOC2wKijmqLUJ1cMjrT1QIzHicuKJOtge',
          created_at: '2019-11-21T02:50:54.000Z',
          photo: null,
          user_id_from: 'd8502c57-07f4-463a-bb0d-261047b4db3c',
          user_id_to: '7ec7bf06-0b6a-42a2-9cc7-175f0582c6f8',
          nominal: 10000,
          date: '2019-11-21T04:17:46.000Z',
          histType: 'transferOut',
        },
        {
          id: '39b8e80b-d44b-42da-b46a-bf46b4254a54',
          name: 'Axis',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/8/83/Axis_logo_2015.svg',
          description: null,
          merchant_id: '2',
          user_id: 'd8502c57-07f4-463a-bb0d-261047b4db3c',
          nominal: 50000,
          cost: 0,
          total: 50000,
          date: '2019-11-20T11:53:00.000Z',
          opo_type: 'opo_cash',
          transaction_type: 'prabayar',
          histType: 'ppobOut',
        },
        {
          id: 'ec3e8a4b-1f1f-46b4-bc4c-4282f11d31c7',
          name: 'Axis',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/8/83/Axis_logo_2015.svg',
          description: null,
          merchant_id: '2',
          user_id: 'd8502c57-07f4-463a-bb0d-261047b4db3c',
          nominal: 50000,
          cost: 0,
          total: 50000,
          date: '2019-11-20T11:52:28.000Z',
          opo_type: 'opo_point',
          transaction_type: 'prabayar',
          histType: 'ppobOut',
        },
        {
          id: '68b0e85f-53be-4675-85ab-98b176d3b19c',
          name: 'BPJS',
          logo:
            'https://seeklogo.com/images/B/bpjs-kesehatan-logo-B436CE3991-seeklogo.com.png',
          description: null,
          merchant_id: '8',
          user_id: 'd8502c57-07f4-463a-bb0d-261047b4db3c',
          total: 100000,
          date: '2019-11-20T11:51:45.000Z',
          opo_type: 'opo_point',
          histType: 'ppobIn',
        },
        {
          id: 'bc4a11d1-5a72-4168-b569-4a805a9b0735',
          name: 'BPJS',
          logo:
            'https://seeklogo.com/images/B/bpjs-kesehatan-logo-B436CE3991-seeklogo.com.png',
          description: null,
          merchant_id: '8',
          user_id: 'd8502c57-07f4-463a-bb0d-261047b4db3c',
          total: 100000,
          date: '2019-11-20T11:51:35.000Z',
          opo_type: 'opo_cash',
          histType: 'ppobIn',
        },
        {
          id: 'bc4a11d1-5a72-4168-b569-4a805a9b0735',
          name: 'BPJS',
          logo:
            'https://seeklogo.com/images/B/bpjs-kesehatan-logo-B436CE3991-seeklogo.com.png',
          description: null,
          merchant_id: '8',
          user_id: 'd8502c57-07f4-463a-bb0d-261047b4db3c',
          total: 100000,
          date: '2019-11-20T11:51:35.000Z',
          opo_type: 'opo_cash',
          histType: 'ppobIn',
        },
        {
          id: 'bc4a11d1-5a72-4168-b569-4a805a9b0735',
          name: 'BPJS',
          logo:
            'https://seeklogo.com/images/B/bpjs-kesehatan-logo-B436CE3991-seeklogo.com.png',
          description: null,
          merchant_id: '8',
          user_id: 'd8502c57-07f4-463a-bb0d-261047b4db3c',
          total: 100000,
          date: '2019-11-20T11:51:35.000Z',
          opo_type: 'opo_cash',
          histType: 'ppobIn',
        },
      ],
      lastDate: '',
    };
  }

  changeDate = date => {
    if (this.state.lastDate !== date) {
      this.setState({
        lastDate: date,
      });
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.newResult.map((o, i) => (
              <View>
                <ListItem itemDivider>
                  <Text style={{color: 'grey', fontSize: 12}}>
                    {o.date.substring(0, 10)}
                  </Text>
                </ListItem>
                <ListItem style={{marginLeft: 5}}>
                  <Body>
                    <Text>{o.phone ? o.phone : o.name}</Text>
                    {o.histType === 'transferOut' && (
                      <Text note style={{fontSize: 12}}>
                        Outcoming Transfer
                      </Text>
                    )}
                    {o.histType === 'transferIn' && (
                      <Text note style={{fontSize: 12}}>
                        Incoming Transfer
                      </Text>
                    )}
                    {o.histType === 'ppobOut' && (
                      <Text note style={{fontSize: 12}}>
                        Pembayaran
                      </Text>
                    )}
                    {o.histType === 'ppobIn' && (
                      <Text note style={{fontSize: 12}}>
                        Rewards
                      </Text>
                    )}
                  </Body>
                  <Right>
                    <Text></Text>
                    {o.histType === 'transferOut' && (
                      <Text note style={{color: 'green', fontSize: 12}}>
                        -Rp{o.nominal}
                      </Text>
                    )}
                    {o.histType === 'transferIn' && (
                      <Text note style={{color: 'green', fontSize: 12}}>
                        +Rp{o.nominal}
                      </Text>
                    )}
                    {o.histType === 'ppobOut' && o.opo_type === 'opo_cash' && (
                      <Text note style={{color: 'green', fontSize: 12}}>
                        -Rp{o.total}
                      </Text>
                    )}
                    {o.histType === 'ppobIn' && o.opo_type === 'opo_cash' && (
                      <Text note style={{color: 'green', fontSize: 12}}>
                        +Rp{o.total}
                      </Text>
                    )}
                    {o.histType === 'ppobOut' && o.opo_type === 'opo_point' && (
                      <Text note style={{color: 'purple', fontSize: 12}}>
                        -OPO Points {o.total}
                      </Text>
                    )}
                    {o.histType === 'ppobIn' && o.opo_type === 'opo_point' && (
                      <Text note style={{color: 'purple', fontSize: 12}}>
                        +OPO Points {o.total}
                      </Text>
                    )}
                  </Right>
                </ListItem>
              </View>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HistCard />
        <FloatingAction
          position="right"
          actions={actions}
          color={'#07B2BB'}
          onPressItem={name => {
            Alert.alert('Icon pressed', `the icon ${name} was pressed`);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
