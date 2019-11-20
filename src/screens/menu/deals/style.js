const React = require('react-native');
const {Dimensions} = React;
const deviceWidth = Dimensions.get('window').width;

export default {
  inpMerchant: {
    backgroundColor: '#EEF0F3',
    height: 50,
    fontSize: 15,
    borderRadius: 10,
  },
  itemInput: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    width: deviceWidth - 100,
    borderRadius: 10,
  },
  hr: {
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 20,
    borderColor: '#EEF0F3',
  },
  btnContent: {
    width: (deviceWidth - 20) / 4,
    alignItems: 'center',
  },
};
