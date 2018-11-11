/* eslint-disable */
const mutations = {
  SET_LOADING(state, payload) {
    return state.loading = payload;
  },
  SET_SNACKBAR(state, payload){
    state.snackbar = {
      visible: payload.visible,
      message: payload.message,
      color: payload.color
    }
  }
};

export default mutations;