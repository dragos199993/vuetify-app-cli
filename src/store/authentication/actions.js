import Axios from 'axios';
import router from '../../router';

const url = 'http://localhost:5000/api/user/';

const actions = {
    signUp({ commit }, user) {
        return Axios.post(`${url}/signup`, user).then((response) => {
            commit('helpers/SET_LOADING', true, { root: true });
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('jwt', response.data.token);
            if (localStorage.getItem('jwt') !== null) {
                commit('UPDATE_AUTHENTICATION', true);
                commit('SET_AUTH_INFO', response.data.user);
                commit('helpers/SET_LOADING', false, { root: true });
                commit('helpers/SET_SNACKBAR_VISIBILITY', true, { root: true }),
                commit('helpers/SET_SNACKBAR_MESSAGE', `Successfully registered ${user.email}!`, { root: true })
                router.push('/');
            }
        }).catch(() => {
            commit('alerts/ERROR', 'Password incorrect or email doesn\'t exists', {
                root: true
            });
            commit('helpers/SET_LOADING', false, {
                root: true
            });
        });
    },
    signIn({
        commit
    }, user) {
        return Axios.post(`${url}/signin`, user).then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('jwt', response.data.token);
            if (localStorage.getItem('jwt') !== null) {
                commit('UPDATE_AUTHENTICATION', true);
                commit('SET_AUTH_INFO', response.data.user);
                commit('helpers/SET_LOADING', false, { root: true });
                router.push('/');
            }
        }).catch(() => {
            commit('alerts/ERROR', 'Password incorrect or email doesn\'t exists', {
                root: true
            });
            commit('helpers/SET_LOADING', false, { root: true });
        });
    },
    logOut({
        commit
    }) {
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        commit('SET_AUTH_INFO', null);
        router.go('/');
    },
};

export default actions;