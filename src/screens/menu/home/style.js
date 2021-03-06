const React = require('react-native');
const {Dimensions} = React;
const deviceWidth = Dimensions.get('window').width;

export default {
  viewBalance: {
    backgroundColor: '#4E2A87',
  },
  balance: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 70,
  },
  txtTopUp: {
    color: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  action: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -40,
  },
  btnAction: {
    width: (deviceWidth - 20) / 3,
    height: 80,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ECECED',
  },
  btnActionFirst: {
    width: (deviceWidth - 20) / 3,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ECECED',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  btnContent: {
    width: (deviceWidth - 20) / 4,
    alignItems: 'center',
  },
  btnContentView: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    borderColor: '#E5F7F7',
  },
  carouselPage: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: deviceWidth - 20,
  },
};
