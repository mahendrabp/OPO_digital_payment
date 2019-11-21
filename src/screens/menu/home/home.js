/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'native-base';
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
  _renderItem({item}) {
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
                <View style={{flex: 1}}>
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
                  }}>
                  <TouchableOpacity>
                    <Button transparent style={{marginRight: 40}}>
                      <Icon name="redo-alt" color="#ffffff" size={20} />
                    </Button>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Button
                      style={{backgroundColor: '#06B3BA', borderRadius: 5}}
                      onPress={() => this.props.navigation.navigate('TopUp')}>
                      <Text style={styles.txtTopUp}>TOP UP</Text>
                    </Button>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.action}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Transfer')}>
              <View style={styles.btnActionFirst}>
                <Icon name="arrow-alt-circle-right" color="#4E2A87" size={30} />
                <Text>Transfer</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Coming soon.')}>
              <View style={styles.btnAction}>
                <Icon name="qrcode" color="#4E2A87" size={30} />
                <Text>Scan</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Coming soon.')}>
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
                <Button
                  style={styles.btnContentView}
                  onPress={() => this.props.navigation.navigate('PLN')}>
                  <Icon name="bolt" color="#06B3BA" size={25} />
                </Button>
                <Text>PLN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button
                  style={styles.btnContentView}
                  onPress={() => alert('Coming soon.')}>
                  <Icon name="mobile-alt" color="#06B3BA" size={25} />
                </Button>
                <Text>Pulsa</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button
                  style={styles.btnContentView}
                  onPress={() => alert('Coming soon.')}>
                  <Icon name="wifi" color="#06B3BA" size={20} />
                </Button>
                <Text>Paket Data</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button
                  style={styles.btnContentView}
                  onPress={() => alert('Coming soon.')}>
                  <Icon name="mobile" color="#06B3BA" size={30} />
                </Button>
                <Text>Pasca Bayar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button
                  style={styles.btnContentView}
                  onPress={() => alert('Coming soon.')}>
                  <Icon name="hands" color="#06B3BA" size={20} />
                </Button>
                <Text>BPJS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button
                  style={styles.btnContentView}
                  onPress={() => alert('Coming soon.')}>
                  <Icon name="satellite-dish" color="#06B3BA" size={25} />
                </Button>
                <Text>TV Kabel</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button
                  style={styles.btnContentView}
                  onPress={() => alert('Coming soon.')}>
                  <Icon name="stream" color="#06B3BA" size={25} />
                </Button>
                <Text>Streaming</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.btnContent}>
                <Button
                  style={styles.btnContentView}
                  onPress={() => alert('Coming soon.')}>
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
          </View>
        </ScrollView>
      </View>
    );
  }
}
