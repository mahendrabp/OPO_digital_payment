/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Button} from 'native-base';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: -20,
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  mainContent: {
    marginTop: -90,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    marginTop: -40,
    marginBottom: 5,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  textScreen: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    marginTop: -10,
    marginBottom: 15,
  },
  pagination: {
    backgroundColor: '#4E2A87',
    flex: 1,
  },
});

const slides = [
  {
    key: 1,
    title: 'Hai, Selamat bergabung di OPO Digital Payment',
    text: '',
    image: require('./../../assets/img/page1.png'),
  },
  {
    key: 2,
    title: 'Poin Berlipat',
    text:
      'Kamu bisa menggunakan OPO Points tiap belanja di berbaga Merchant rekanan',
    image: require('./../../assets/img/page2.png'),
  },
  {
    key: 3,
    title: 'Kirim uang lebih mudah ke seluruh Indonesia',
    text:
      'Hanya dengan memasukkan rekening Bank atau nomor ponsel yang telah terdaftar sebagai OPO untuk transfer',
    image: require('./../../assets/img/page3.png'),
  },
  {
    key: 4,
    title: 'Promo Memikat',
    text:
      'Hanya dengan memasukkan rekening Bank atau nomor ponsel yang telah terdaftar sebagai OPO untuk transfer',
    image: require('./../../assets/img/page4.png'),
  },
  {
    key: 5,
    title: 'Atur Keuangan Dengan Tepat',
    text:
      'Nggak akan ada kebocoran keuangan karena sudah dibuat perencanaan setiap bulan',
    image: require('./../../assets/img/page5.png'),
  },
];

export default class App extends Component {
  goToLogin = () => {
    this.props.navigation.navigate('LoginScreen');
  };
  _renderNextButton = () => {
    return <Icon name="chevron-circle-right" size={40} color="white" />;
  };
  _renderDoneButton = () => {
    return (
      <Icon
        name="check-circle"
        size={40}
        color="white"
        onPress={() => this.goToLogin()}
      />
    );
  };
  _renderItem({item, index}) {
    return (
      <View style={styles.mainContent}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.pagination}>
        <Text style={styles.textScreen}>OPO</Text>
        <Text style={styles.subTitle}>Digital Payment</Text>
        <AppIntroSlider
          style={{backgroundColor: '#4E2A87'}}
          slides={slides}
          renderItem={this._renderItem}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
        />
      </View>
    );
  }
}
