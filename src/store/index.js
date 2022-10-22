import { createStore } from 'vuex';
import snack from './snack';

export default createStore({
    state: {
        // user: null,
        // loggedIn: false,
        // isAdmin: false,
    },
    mutations: {
        // SET_USER_DATA(state, userData) {
        //   state.user = userData;
        //   state.loggedIn = true;
        //   localStorage.setItem('user', JSON.stringify(userData));
        //   if (userData.email === 'andiliang9988@gmail.com') {
        //     state.isAdmin = true;
        //   }
        // },
        // CLEAR_USER_DATA() {
        //   localStorage.removeItem('user');
        //   location.reload();
        // },
    },
    actions: {
        // async login({ commit }, credentials) {
        //   await axios.get('/sanctum/csrf-cookie');
        //   return await axios.post('/login', credentials).then(({ data }) => {
        //     commit('SET_USER_DATA', data);
        //   });
        // },
        // logout({ commit }) {
        //   commit('CLEAR_USER_DATA');
        // },
    },
    getters: {
        // loggedIn(state) {
        //   return !!state.user;
        // },
    },

    modules: {
        snack,
    },
});
