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
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// import {connect} from 'react-redux'

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
  constructor(props) {
    super(props);
    this.state = {
      // id: props.id,
      newResult: [],
    };
  }

  componentDidMount() {
    console.log('=====');
    console.log(this.props.id);
    let link = 'http://localhost:5050/api/v1/balance/history/' + this.props.id;
    // console.log(link)
    this.getData(link)
      .then(res => {
        // console.log(res)
        this.setState({newResult: res.newResult});
        // console.log(this.state.searchResult)
      })
      .catch(err => {
        console.log(err);
      });
  }

  getData = async page => {
    const hist = await axios.get(
      page !== undefined ? page : 'http://localhost:8080/jobs',
    );
    return hist.data;
  };

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
  constructor(props) {
    super(props);
    // console.log('LATHIF ' + this.props.user.getUser[0].user_id)
    this.state = {
      id: '',
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const auth = await AsyncStorage.getItem('Authorization');
    const id = await AsyncStorage.getItem('idUser');
    // await this.props.dispatch(getuser(id, auth));
    this.setState({id: id}, console.log(this.state));
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.id !== '' && <HistCard id={this.state.id} />}
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

// const mapStateToProps = state => ({
//   user: state.user,
// });

// export default connect(mapStateToProps)(History);
