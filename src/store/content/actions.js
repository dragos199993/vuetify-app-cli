
import Axios from 'axios';
const url = require('../../helpers/urls');

const actions = {
  FETCH_ITEMS({ commit, state }){
    Axios.get(url.items).then( res => {
      state.data = res.data
  })
  },
  ADD_NEW_ITEM({ commit }, payload) {
    commit('helpers/SET_LOADING', true, { root: true });
    Axios.post(url.items, {
      title: payload.title,
      createdAt: new Date()
    })
    commit('ADD_NEW_ITEM', payload);
    commit('helpers/SET_LOADING', false, { root: true });
  },
  DELETE_ITEM({ commit, state}, payload){
    commit('helpers/SET_LOADING', true, { root: true });
    Axios.delete(`${url.items}${payload.id}`)
    state.data.splice(payload.index, 1);
    commit('helpers/SET_LOADING', false, { root: true });
  }
};

export default actions;
