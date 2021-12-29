import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    loggedIn: false,
    isAdmin: false,
    theme: 'light',
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      let twoHour = 2 * 1000 * 60 * 60;
      // console.log(now + twoHour);
      userData.experieAt = Date.now() + twoHour;
      state.user = userData;
      state.loggedIn = true;
      localStorage.setItem('user', JSON.stringify(userData));
      if (userData.email === 'andiliang9988@gmail.com') {
        state.isAdmin = true;
      }
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('user');
      location.reload();
    },
    SET_THEME(state, theme) {
      state.theme = theme;
    },
    TOGGLE_THEME(state) {
      if (state.theme === 'light') {
        state.theme = 'dark';
        localStorage.setItem('theme', 'dark');
      } else {
        state.theme = 'light';
        localStorage.setItem('theme', 'light');
      }
    },
  },
  actions: {
    async login({ commit }, credentials) {
      await axios.get('/sanctum/csrf-cookie');
      return await axios.post('/login', credentials).then(({ data }) => {
        commit('SET_USER_DATA', data);
      });
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA');
    },
    changeTheme({ commit }) {
      commit('TOGGLE_THEME');
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
});
