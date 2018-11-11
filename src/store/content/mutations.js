/* eslint-disable */
const mutations = {
  CHECK_ITEM(state){
    state.itemChecked = !state.itemChecked;
  },
  ADD_NEW_ITEM(state, payload){
    state.data.push(payload);
  }
};

export default mutations;