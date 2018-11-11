/* eslint-disable */
const mutations = {
  CHECK_ITEM(state){
    state.itemChecked = !state.itemChecked
  },
  FETCH_CONTENT(state, payload){
    state.data = payload
  }
};

export default mutations;