// import axios for getting data from API
import axios from 'axios';

// export action that get notes
const URIGetUser = 'http://localhost:5050/api/v1/user/get/';
const URILogin = 'http://localhost:5050/api/v1/user/login/';
const URISignUp = 'http://localhost:5050/api/v1/user/signup/';
const URITransfer = 'http://localhost:5050/api/v1/balance/transfer/';

export const transfer = (phone, nominal, id) => {
  const data = {
    phoneTo: phone,
    nominal,
  }
  console.log(data)
  console.log(id)
  return {
    type: 'TRANSFER',
    payload: axios.patch(URITransfer + id, data)
  }
}

export const getuser = (id, auth) => {
  return {
    type: 'GET_USER',
    payload: axios.get(URIGetUser + id, {headers: {authorization: auth}}),
  };
};

export const loginstep1 = data => {
  return {
    type: 'LOGIN_STEP1',
    payload: axios.post(URILogin + 'step1', data),
  };
};

export const loginstep2 = data => {
  return {
    type: 'LOGIN_STEP2',
    payload: axios.post(URILogin + 'step2', data),
  };
};

export const signupstep1 = data => {
  return {
    type: 'SIGNUP_STEP1',
    payload: axios.post(URISignUp + 'step1', data),
  };
};
export const signupstep2 = data => {
  return {
    type: 'SIGNUP_STEP2',
    payload: axios.post(URISignUp + 'step2', data),
  };
};
