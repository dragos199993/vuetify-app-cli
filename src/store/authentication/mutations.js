/* eslint-disable */
const mutations = {
  UPDATE_AUTHENTICATION(state, payload) {
    return state.authenticated = payload;
  },
  SET_AUTH_INFO(state, payload) {
    return state.authInfo = payload;
  },
  GENERAL_ERROR(state, payload) {
    return state.generalError = payload;
  },
  TOGGLE_AUTH_LOGIN_VISIBILITY(state, payload) {
    return state.auth.loginFormVisibility = payload;
  },
  TOGGLE_AUTH_REGISTER_VISIBILITY(state, payload) {
    return state.auth.registerFormVisibility = payload;
  }
};

export default mutations;