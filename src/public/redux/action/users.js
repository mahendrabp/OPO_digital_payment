// import axios for getting data from API
import axios from 'axios';

// export action that get notes
const URILogin = 'http://localhost:5200/api/v1/user/login/';
const URISignUp = 'http://localhost:5200/api/v1/user/signup/';

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
    type: 'LOGIN_STEP2',
    payload: axios.post(URILogin + 'step2', data),
  };
};
export const signupstep2 = data => {
  return {
    type: 'LOGIN_STEP2',
    payload: axios.post(URILogin + 'step2', data),
  };
};
