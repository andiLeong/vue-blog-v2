import axios from 'axios';
import { reactive, computed } from 'vue';

import { useRouter, useRoute } from 'vue-router';

const state = reactive({
  authenticated: false,
  user: {},

  // authenticated: localStorage.getItem('isLogin') === null ? false :localStorage.getItem('isLogin') ,
  // user: localStorage.getItem('user') === null ? {} :localStorage.getItem('user')
});

export default function useAuth() {
  const getAuthenticated = computed(() => state.authenticated);
  const getUser = computed(() => state.user);

  const setAuthenticated = (authenticated) => {
    state.authenticated = authenticated;
  };

  const setUser = (user) => {
    state.user = user;
  };

  const attempt = async () => {
    // if( window.location.pathname !== '/login'){
    //   return;
    // }

    // if( ! getAuthenticated){
    //   return;
    // }

    try {
      let response = await axios.get('/api/user');

      setAuthenticated(true);
      setUser(response.data);

      return response;
    } catch (e) {
      setAuthenticated(false);
      setUser({});
    }
  };

  const login = async (credentials) => {
    await axios.get('/sanctum/csrf-cookie');
    await axios.post('/login', credentials);
    attempt();
  };

  return {
    login,
    attempt,
    getAuthenticated,
    getUser,
  };
}
