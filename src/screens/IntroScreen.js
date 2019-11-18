/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Button} from 'native-base';

class IntroScreen extends Component {
  goToLogin = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  render() {
    return (
      <View>
        <View style={{backgroundColor: '#4E2A87'}}>
          <Text style={styles.textScreen}>OPO</Text>
          <Text style={styles.subTitle}>Digital Payment</Text>
        </View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          scrollEventThrottle={10}>
          {/* Slide 1 */}
          <View style={styles.pagination}>
            <View style={styles.cardPage}>
              <View style={styles.marginImage}>
                <Image
                  style={styles.ImagePage}
                  source={require('./../../assets/img/page1.png')}
                />
                <Text style={styles.TextImagePage}>
                  Hai, Selamat bergabung di OPO Digital Payment
                </Text>
              </View>
              <Text style={styles.PageSlide}>
                Geser untuk mempelajari lebih lanjut
              </Text>
            </View>
          </View>
          {/* Slide 2 */}
          <View style={styles.pagination}>
            <View style={styles.cardPage}>
              <View style={styles.marginImage}>
                <Image
                  style={styles.ImagePage}
                  source={require('./../../assets/img/page2.png')}
                />
                <Text style={styles.TextImagePage2}>Poin Berlipat</Text>
                <Text style={styles.TextPageSlide}>
                  Kamu bisa menggunakan OPO Points tiap belanja di berbagai
                  Merchant rekanan
                </Text>
              </View>
            </View>
          </View>
          {/* Slide 3 */}
          <View style={styles.pagination}>
            <View style={styles.cardPage}>
              <View style={styles.marginImage}>
                <Image
                  style={styles.ImagePage}
                  source={require('./../../assets/img/page3.png')}
                />
                <Text style={styles.TextImagePage}>
                  Kirim uang lebih mudah ke seluruh Indonesia
                </Text>
                <Text style={styles.TextPageSlide}>
                  Hanya dengan memasukkan rekening Bank atau nomor ponsel yang
                  telah terdaftar sebagai OPO untuk transfer
                </Text>
              </View>
            </View>
          </View>
          {/* Slide 4 */}
          <View style={styles.pagination}>
            <View style={styles.cardPage}>
              <View style={styles.marginImage}>
                <Image
                  style={styles.ImagePage}
                  source={require('./../../assets/img/page4.png')}
                />
                <Text style={styles.TextImagePage}>Promo Memikat</Text>
                <Text style={styles.TextPageSlide}>
                  Hanya dengan memasukkan rekening Bank atau nomor ponsel yang
                  telah terdaftar sebagai OPO untuk transfer
                </Text>
              </View>
            </View>
          </View>
          {/* Slide 5 */}
          <View style={styles.pagination}>
            <View style={styles.cardPage}>
              <View style={styles.marginImage}>
                <Image
                  style={styles.ImagePage}
                  source={require('./../../assets/img/page5.png')}
                />
                <Text style={styles.TextImagePage}>
                  Atur Keuangan Dengan Tepat
                </Text>
                <Text style={styles.TextPageSlide}>
                  Nggak akan ada kebocoran keuangan karena sudah dibuat
                  perencanaan setiap bulan
                </Text>
              </View>
              <Button
                block
                style={styles.buttonInput}
                onPress={() => this.goToLogin()}>
                <Text style={styles.buttonText}>MULAI</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  textScreen: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  buttonInput: {
    marginLeft: 10,
    marginRight: 10,
    color: '#fff',
    borderRadius: 30,
    backgroundColor: '#00cec9',
  },
  marginImage: {
    marginTop: 40,
  },
  ImagePage: {
    alignSelf: 'center',
    width: '50%',
    height: '60%',
    resizeMode: 'contain',
  },
  TextImagePage: {
    textAlign: 'center',
    fontWeight: '700',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    color: '#4E2A87',
  },
  TextImagePage2: {
    textAlign: 'center',
    fontWeight: '700',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    fontSize: 20,
    color: '#4E2A87',
  },
  TextPageSlide: {
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 13,
    color: '#000',
    opacity: 0.2,
  },
  PageSlide: {
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 13,
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 40,
    color: '#000',
    opacity: 0.2,
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    marginTop: -10,
    marginBottom: 15,
  },
  cardPage: {
    backgroundColor: '#fff',
    width: '85%',
    height: '67%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  pagination: {
    backgroundColor: '#4E2A87',
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
});

export default IntroScreen;
