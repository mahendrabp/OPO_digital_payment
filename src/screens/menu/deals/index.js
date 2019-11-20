/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Item, Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import Carousel from 'react-native-snap-carousel';
const deviceWidth = Dimensions.get('window').width;

export default class Deals extends Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 0,
      carouselItemsKolomKebahagiaan: [
        {
          title: 'Yummy ber 3',
          shop: 'Yoshinoya',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/kolomKebahagiaan/makanan.jpg'),
          harga: 'Rp. 100.000',
        },
        {
          title: 'Chew Chew Boba!',
          shop: 'Fook Yew',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/kolomKebahagiaan/boba.jpg'),
          harga: 'Rp. 30.000',
        },
        {
          title: 'What\'s Your Color ?',
          shop: 'iEye',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/kolomKebahagiaan/eye.jpg'),
          harga: 'Rp. 350.000',
        },
        {
          title: 'A Peaceful Place to Relax',
          shop: 'PONDOK SARI HOTEL',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/kolomKebahagiaan/hotel.jpg'),
          harga: 'Rp. 500.000',
        },
        {
          title: 'Donasi Pendidikan',
          shop: 'YPH Papua',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/kolomKebahagiaan/papua.jpg'),
          harga: 'Rp. 25.000',
        },
        {
          title: 'Save Meong & Guguk',
          shop: 'Yayasan Benih Baik Indo',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/kolomKebahagiaan/meong.jpg'),
          harga: 'Rp. 18.000',
        },
      ],
      carouselItemsCashBack: [
        {
          illustration: require('../../../../assets/img/deals/cashback/2.png'),
        },
        {
          illustration: require('../../../../assets/img/deals/cashback/3.png'),
        },
        {
          illustration: require('../../../../assets/img/deals/cashback/4.png'),
        },
        {
          illustration: require('../../../../assets/img/deals/cashback/5.png'),
        },
        {
          illustration: require('../../../../assets/img/deals/cashback/6.png'),
        },
      ],
      carouselItemsFavorit: [
        {
          title: 'Ice Cream Value Scoop',
          shop: 'Baskin Robins',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/favorit/es.jpg'),
          harga: 'Rp. 70.000',
        },
        {
          title: 'Voucher Senilai Rp100.000',
          shop: 'Imperial Kitchen & Dimsum',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/favorit/dimsum.jpg'),
          harga: 'Rp. 85.000',
        },
        {
          title: 'Ebi Mentai Mayo Udon',
          shop: 'Marugame Udon',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/favorit/udon.jpg'),
          harga: 'Rp. 85.000',
        },
        {
          title: 'Es Susu Boba Gula Aren',
          shop: 'Kopi Kenangan',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/favorit/kopi.jpg'),
          harga: 'Rp. 58.000',
        },
        {
          title: 'Wendy\'s Beef Burger',
          shop: 'Wendy\'s',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/favorit/burger.jpg'),
          harga: 'Rp. 45.000',
        },
        {
          title: '3 Roti Aneka Rasa',
          shop: 'BreadLife',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/favorit/roti.jpg'),
          harga: 'Rp. 29.000',
        },
        {
          title: 'Set Menu All Chicken',
          shop: 'Go! Curry',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/favorit/ayam.jpg'),
          harga: 'Rp. 89.000',
        },
        {
          title: 'Buy 1 Get 1 Soft Serve',
          shop: 'Godiva',
          voucher: 'Tersedia 1000 vouchers',
          illustration: require('../../../../assets/img/deals/favorit/godiva.jpg'),
          harga: 'Rp. 84.000',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <TouchableOpacity>
        <View
          style={{borderWidth: 1, elevation: 1, borderRadius: 10}}
          onPress={() => alert('Under Development. Thankyou')}>
          <Image
            style={{height: 125, width: deviceWidth - 82}}
            source={item.illustration}
            onPress={() => alert('Under Development. Thankyou')}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
          />
          <Text style={{marginLeft: 10, marginTop: 5, fontSize: 20}}>
            {item.title}
          </Text>
          <Text style={{marginLeft: 10, marginTop: 5, fontSize: 17}}>
            {item.shop}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 5,
              fontSize: 13,
              color: '#7F888F',
            }}>
            {item.voucher}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 5,
              fontSize: 20,
              marginBottom: 10,
              color: '#885BD5',
            }}>
            {item.harga}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  _renderItemCashBack({item, index}) {
    return (
      <TouchableOpacity>
        <View
          style={{flex: 1, borderWidth: 1, elevation: 1, borderRadius: 10}}
          onPress={() => alert('Under Development. Thankyou')}>
          <Image
            style={{height: 125, width: deviceWidth - 82}}
            source={item.illustration}
            onPress={() => alert('Under Development. Thankyou')}
            borderRadius={10}
          />
        </View>
      </TouchableOpacity>
    );
  }
  _renderItemFavorit({item, index}) {
    return (
      <TouchableOpacity>
        <View
          style={{flex: 1, borderWidth: 1, elevation: 1, borderRadius: 10}}
          onPress={() => alert('Under Development. Thankyou')}>
          <Image
            style={{height: 125, width: deviceWidth - 82}}
            source={item.illustration}
            onPress={() => alert('Under Development. Thankyou')}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
          />
          <Text style={{marginLeft: 10, marginTop: 5, fontSize: 17}}>
            {item.title}
          </Text>
          <Text style={{marginLeft: 10, marginTop: 5, fontSize: 15}}>
            {item.shop}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 5,
              fontSize: 13,
              color: '#7F888F',
            }}>
            {item.voucher}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 5,
              fontSize: 20,
              marginBottom: 10,
              color: '#885BD5',
            }}>
            {item.harga}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Item regular style={styles.itemInput}>
              <Input placeholder="Cari merchants" style={styles.inpMerchant} />
            </Item>
            <View>
              <Icon
                name="money-bill-wave"
                color="#06B3BA"
                size={30}
                style={{marginTop: -10}}
              />
            </View>
          </View>
          <View style={styles.hr} />
          <View style={{marginLeft: 20, marginRight: 20}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 20, marginRight: 'auto'}}>
                Cashback Lagi dan Lagi
              </Text>
              <Text style={{color: '#06B3BA'}}>Lihat semua</Text>
            </View>
            <View style={{marginTop: 20, marginBottom: 10}}>
              <Carousel
                ref={ref => (this.carousel = ref)}
                data={this.state.carouselItemsCashBack}
                sliderWidth={deviceWidth - 30}
                itemWidth={deviceWidth - 80}
                itemHeight={100}
                renderItem={this._renderItemCashBack}
                onSnapToItem={index => this.setState({activeSlide: index})}
              />
            </View>
          </View>
          <View style={styles.hr} />
          <View style={{marginLeft: 20, marginRight: 20}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 20, marginRight: 'auto'}}>
                Kolom Kebahagiaan
              </Text>
              <Text style={{color: '#06B3BA'}}>Lihat semua</Text>
            </View>
            <View style={{marginTop: 20, marginBottom: 10}}>
              <Carousel
                ref={ref => (this.carousel = ref)}
                data={this.state.carouselItemsKolomKebahagiaan}
                sliderWidth={deviceWidth - 30}
                itemWidth={deviceWidth - 80}
                itemHeight={100}
                renderItem={this._renderItem}
                onSnapToItem={index => this.setState({activeSlide: index})}
              />
            </View>
          </View>
          <View style={styles.hr} />
          <View style={{marginLeft: 20, marginRight: 20}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 20, marginRight: 'auto'}}>
                Yang Favorit dan Irit
              </Text>
              <Text style={{color: '#06B3BA'}}>Lihat semua</Text>
            </View>
            <View style={{marginTop: 20, marginBottom: 10}}>
              <Carousel
                ref={ref => (this.carousel = ref)}
                data={this.state.carouselItemsFavorit}
                sliderWidth={deviceWidth - 30}
                itemWidth={deviceWidth - 80}
                itemHeight={100}
                renderItem={this._renderItemFavorit}
                onSnapToItem={index => this.setState({activeSlide: index})}
              />
            </View>
          </View>
          <View style={styles.hr} />
          <View style={{marginLeft: 20, marginRight: 20}}>
            <Text style={{fontSize: 20}}>Nikmati Dunia Lainnya</Text>
            <Text style={{color: '#8D9295', marginTop: 10, marginBottom: 40}}>
              Silahkan dilihat-lihat kakak
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="hamburger" color="#EDA443" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Food</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="shopping-bag" color="#E06C6C" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Shopping</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="bus-alt" color="#3B91C2" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Transport</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="graduation-cap" color="#38B9BD" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Education</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="gift" color="#E06C6C" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Gift</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="plane" color="#EDA443" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Travel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="user-circle" color="#38B9BD" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Personal</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="dumbbell" color="#9778D6" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Sport</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="tshirt" color="#D55288" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Fashion</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="first-aid" color="#38B9BD" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Health</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="user-circle" color="#E06C6C" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Entertain..</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnContent}>
                  <Button transparent>
                    <Icon name="truck-monster" color="#38B9BD" size={50} />
                  </Button>
                  <Text style={{marginTop: 20}}>Automotive</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
