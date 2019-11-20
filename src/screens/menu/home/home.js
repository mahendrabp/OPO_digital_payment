/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import styles from './style';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Button, Left, Header} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';

const deviceWidth = Dimensions.get('window').width;

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 0,
      carouselItems: [
        {
          illustration: require('../../../../assets/img/1.png'),
        },
        {
          illustration: require('../../../../assets/img/2.png'),
        },
        {
          illustration: require('../../../../assets/img/3.png'),
        },
        {
          illustration: require('../../../../assets/img/4.png'),
        },
      ],
    };
  }
  _renderItem({item, index}) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={item.illustration} />
      </View>
    );
  }
  render() {
    return (
      <View>
        <View>
          <View style={styles.viewBalance}>
            <View style={styles.balance}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{color: '#ffffff'}}>OPO CASH</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#E5A534', fontSize: 13}}>Rp</Text>
                    <Text style={{color: '#E5A534', fontSize: 25}}>17.450</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#ffffff', fontSize: 13}}>
                      OPO POINTS{' '}
                    </Text>
                    <Text style={{color: '#E5A534', fontSize: 13}}>17.450</Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginLeft: deviceWidth - 255,
                    width: 100,
                  }}>
                  <TouchableOpacity>
                    <Button transparent style={{marginRight: 20}}>
                      <Icon name="redo-alt" color="#ffffff" size={20} />
                    </Button>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Button
                      style={{backgroundColor: '#06B3BA', borderRadius: 5}}>
                      <Text style={styles.txtTopUp}>TOP UP</Text>
                    </Button>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.action}>
            <TouchableOpacity>
              <View style={styles.btnActionFirst}>
                <Icon name="arrow-alt-circle-right" color="#4E2A87" size={30} />
                <Text>Transfer</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnAction}>
                <Icon name="qrcode" color="#4E2A87" size={30} />
                <Text>Scan</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnAction}>
                <Icon name="user-circle" color="#4E2A87" size={30} />
                <Text>OPO ID</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button style={styles.btnContentView}>
                  <Icon name="bolt" color="#06B3BA" size={25} />
                </Button>
                <Text>PLN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button style={styles.btnContentView}>
                  <Icon name="mobile-alt" color="#06B3BA" size={25} />
                </Button>
                <Text>Pulsa</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button style={styles.btnContentView}>
                  <Icon name="wifi" color="#06B3BA" size={20} />
                </Button>
                <Text>Paket Data</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button style={styles.btnContentView}>
                  <Icon name="mobile" color="#06B3BA" size={30} />
                </Button>
                <Text style={{fontSize: 13, marginLeft: 1}}>Pasca Bayar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button style={styles.btnContentView}>
                  <Icon name="hands" color="#06B3BA" size={20} />
                </Button>
                <Text>BPJS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button style={styles.btnContentView}>
                  <Icon name="satellite-dish" color="#06B3BA" size={25} />
                </Button>
                <Text>TV Kabel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button style={styles.btnContentView}>
                  <Icon name="stream" color="#06B3BA" size={25} />
                </Button>
                <Text>Streaming</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button style={styles.btnContentView}>
                  <Icon name="ellipsis-h" color="#06B3BA" size={25} />
                </Button>
                <Text>Lainnya</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.carouselPage}>
            <Carousel
              ref={ref => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={deviceWidth - 20}
              itemWidth={deviceWidth - 50}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({activeSlide: index})}
            />
            <View style={{marginBottom: 210}} />
            {console.log(deviceWidth)}
          </View>
        </ScrollView>
      </View>
    );
  }
}
