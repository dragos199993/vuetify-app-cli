const actions = {
  DISPLAY_SNACKBAR({ commit, state }, payload) {
    commit('SET_SNACKBAR_VISIBILITY', true),
    commit('SET_SNACKBAR_MESSAGE', payload.text)
  }
};

export default actions;
