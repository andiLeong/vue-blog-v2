import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import AppLink from '@/components/AppLink.vue';
import axios from 'axios';
import { ObserveVisibility } from 'vue-observe-visibility';
import './index.css';

import store from './store';
window.axios = axios;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

const app = createApp(App)
  .component('AppLink', AppLink)
  .use(router)
  .use(store)
  .directive('observe-visibility', {
    beforeMount: (el, binding, vnode) => {
      vnode.context = binding.instance;
      ObserveVisibility.bind(el, binding, vnode);
    },
    update: ObserveVisibility.update,
    unmounted: ObserveVisibility.unbind,
  })
  .mount('#app');
