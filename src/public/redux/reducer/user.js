import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  resultStep1: [],
  resultStep2: [],
  resultSignUpStep1: [],
  resultSignUpStep2: [],
  getUser: {},
  opo_cash: '',
  opo_point: '',
  authorization: '',
  isLoading: false,
  isError: false,
  transfer: '',
};

// create a reducer for getting network from RESTful API
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TRANSFER':
      // console.log(action.payload.data.result.nominal)
      return {
      };
    case 'GET_USER_PENDING':
      return {
        isLoading: true,
      };
    case 'GET_USER_REJECTED':
      return {
        isLoading: false,
        isError: true,
      };
    case 'GET_USER_FULFILLED':
      return {
        isLoading: false,
        isError: false,
        getUser: action.payload.data.result,
      };

    case 'LOGIN_STEP1_PENDING':
      return {
        isLoading: true,
      };
    case 'LOGIN_STEP1_REJECTED':
      return {
        isLoading: false,
        isError: true,
      };
    case 'LOGIN_STEP1_FULFILLED':
      return {
        isLoading: false,
        isError: false,
        resultStep1: action.payload.data.result,
      };

    case 'LOGIN_STEP2_PENDING':
      return {
        isLoading: true,
      };
    case 'LOGIN_STEP2_REJECTED':
      return {
        isLoading: false,
        isError: true,
      };
    case 'LOGIN_STEP2_FULFILLED':
      AsyncStorage.setItem(
        'Authorization',
        action.payload.data.result.authorization,
      );
      AsyncStorage.setItem('idUser', action.payload.data.result.user_id);
      console.log(AsyncStorage.getItem('Authorization'));
      return {
        isLoading: false,
        isError: false,
        resultStep2: action.payload.data.result,
        opo_cash: action.payload.data.result.opo_cash,
      };

    case 'SIGNUP_STEP1_PENDING':
      return {
        isLoading: true,
      };
    case 'SIGNUP_STEP1_REJECTED':
      return {
        isLoading: false,
        isError: true,
      };
    case 'SIGNUP_STEP1_FULFILLED':
      return {
        isLoading: false,
        isError: false,
        resultSignUpStep1: action.payload.data.result,
      };

    case 'SIGNUP_STEP2_PENDING':
      return {
        isLoading: true,
      };
    case 'SIGNUP_STEP2_REJECTED':
      return {
        isLoading: false,
        isError: true,
      };
    case 'SIGNUP_STEP2_FULFILLED':
      AsyncStorage.setItem(
        'Authorization',
        action.payload.data.result.authorization,
      );
      AsyncStorage.setItem('idUser', action.payload.data.result.id);
      console.log(AsyncStorage.getItem('Authorization'));
      return {
        isLoading: false,
        isError: false,
        resultStep2: action.payload.data.result,
        opo_cash: action.payload.data.result.opo_cash,
      };

    default:
      return state;
  }
};

export default user;
