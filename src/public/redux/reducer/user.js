import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  resultStep1: [],
  resultStep2: [],
  authorization: '',
  isLoading: false,
  isError: false,
};

// create a reducer for getting network from RESTful API
const user = (state = initialState, action) => {
  switch (action.type) {
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
      AsyncStorage.setItem('Authorization', action.payload.data.token);
      console.log(AsyncStorage.getItem('Authorization'));
      return {
        isLoading: false,
        isError: false,
        resultStep2: action.payload.data.result,
        authorization: action.payload.data.result.authorization,
      };
    default:
      return state;
  }
};

export default user;
