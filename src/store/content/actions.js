
import Axios from 'axios';
const url = require('../../helpers/urls');

const actions = {
  ADD_NEW_ITEM({ commit }, payload) {
    Axios.post(`${url.items}`, {
      title: payload.title,
      createdAt: new Date()
    })
  }
};

export default actions;
