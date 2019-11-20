const React = require('react-native');
const {Dimensions} = React;
const deviceWidth = Dimensions.get('window').width;

export default {
  viewWallet: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  cardWallet: {
    width: deviceWidth - 50,
    marginBottom: 30,
    backgroundColor: '#0000ff',
    borderRadius: 10,
  },
};
