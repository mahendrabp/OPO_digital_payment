/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  BackHandler,
  TextInput,
  FlatList,
  SafeAreaView,
  Item,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Title,
  Content,
  ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
class HelpScreen extends Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  goBack = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    this.goBack();
    return true;
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#4E2A87'}}>
          <Left>
            <Button transparent onPress={() => this.goBack()}>
              <Icon name="arrow-left" color="white" size={20} />
            </Button>
          </Left>
          <Body>
            <Title style={{fontSize: 15}}>PUSAT BANTUAN</Title>
          </Body>
        </Header>
        <View
          style={{
            backgroundColor: '#ecf0f1',
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: '#b2bec3',
          }}>
          <TextInput
            placeholder="Cari Kata Kunci"
            style={{
              marginTop: 4,
              marginLeft: 20,
              fontSize: 16,
              marginBottom: 4,
              width: '83%',
            }}
          />
          <Button
            transparent
            style={{
              flex: 1,
              alignItems: 'flex-end',
              alignContent: 'space-around',
            }}>
            <Icon name="search" size={20} color="#2d3436" />
          </Button>
        </View>
        <View>
          <SafeAreaView>
            <FlatList
              contentContainerStyle={{paddingBottom: 150}}
              data={itemHelp}
              renderItem={({item}) => (
                <HelpItem
                  title={item.title}
                  iconLeft={item.iconLeft}
                  key={item.key}
                />
              )}
            />
          </SafeAreaView>
        </View>
      </Container>
    );
  }
}
export default HelpScreen;

function HelpItem({title, iconLeft}) {
  return (
    <ListItem style={{flexDirection: 'row'}}>
      <View>
        <Icon name={iconLeft} size={30} />
      </View>
      <View style={{marginLeft: 20}}>
        <Text>{title}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Icon name="chevron-right" size={15} />
      </View>
    </ListItem>
  );
}

const itemHelp = [
  {
    key: '1',
    iconLeft: 'exclamation-circle',
    title: 'Info Umum',
  },
  {
    key: '2',
    iconLeft: 'cog',
    title: 'Akun Dan Pengaturan',
  },
  {
    key: '3',
    iconLeft: 'plus-circle',
    title: 'Top Up',
  },
  {
    key: '4',
    iconLeft: 'exchange',
    title: 'Transfer',
  },
  {
    key: '5',
    iconLeft: 'list',
    title: 'Tagihan',
  },
  {
    key: '6',
    iconLeft: 'tag',
    title: 'deals',
  },
  {
    key: '7',
    iconLeft: 'car',
    title: 'Parking',
  },
  {
    key: '8',
    iconLeft: 'signal',
    title: 'OPO Invest',
  },
  {
    key: '9',
    iconLeft: 'ellipsis-h',
    title: 'Lainnya',
  },
];
