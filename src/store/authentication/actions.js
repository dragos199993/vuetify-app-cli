import Axios from 'axios';
import router from '../../router/router';

const url = 'http://localhost:5000/api/user/';

const actions = {
    signUp({ commit }, user) {
        return Axios.post(`${url}/signup`, user).then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('jwt', response.data.token);
            if (localStorage.getItem('jwt') !== null) {
                commit('UPDATE_AUTHENTICATION', true);
                commit('SET_AUTH_INFO', response.data.user);
                commit('helpers/SET_LOADING', false, { root: true });
                commit('helpers/SET_SNACKBAR', {
                    visible: true,
                    message: `Successfully registered ${user.email}!`,
                    color: 'success'
                  }, { root: true }),
                router.push('/');
            }
        }).catch(() => {
            commit('helpers/SET_SNACKBAR', {
                visible: true,
                message: `Something went wrong...`,
                color: 'success'
              }, { root: true }),
            commit('helpers/SET_LOADING', false, { root: true });
        });
    },
    signIn({ commit }, user) {
        return Axios.post(`${url}/signin`, user).then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('jwt', response.data.token);
            if (localStorage.getItem('jwt') !== null) {
                commit('UPDATE_AUTHENTICATION', true);
                commit('SET_AUTH_INFO', response.data.user);
                commit('helpers/SET_LOADING', false, { root: true });
                commit('helpers/SET_SNACKBAR', {
                    visible: true,
                    message: `Welcome back, ${user.email}`,
                    color: 'success'
                  }, { root: true }),
                router.push('/');
            }
        }).catch(() => {
            commit('helpers/SET_SNACKBAR', {
                visible: true,
                message: `Password not correct or email is not registered`,
                color: 'error'
              }, { root: true }),
            commit('helpers/SET_LOADING', false, { root: true });
        });
    },
    logOut({ commit }) {
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        commit('helpers/SET_SNACKBAR', {
            visible: true,
            message: `You logged out from your account`,
            color: 'info'
        }, { root: true }),
        commit('SET_AUTH_INFO', null);
        router.push('/');
    },
};

export default actions;