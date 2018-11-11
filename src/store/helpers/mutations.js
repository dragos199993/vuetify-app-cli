/* eslint-disable */
const mutations = {
  SET_LOADING(state, payload) {
    return state.loading = payload;
  },
  SET_SNACKBAR_VISIBILITY(state, payload) {
    return state.snackbarVisible = payload
  },
  SET_SNACKBAR_MESSAGE(state, payload) {
    return state.globalMessage = payload
  }
};

export default mutations;