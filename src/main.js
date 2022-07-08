import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import AppLink from '@/components/AppLink.vue';
import axios from 'axios';
import { ObserveVisibility } from 'vue-observe-visibility';
import '@/css/index.css';

// import store from './store';
import appUrl from '../appconfig.js';
import SubmitButton from '@/components/forms/SubmitButton.vue';
import ValidationErrors from '@/components/validation/ValidationErrors.vue'
import Snack from '@/components/Snack.vue'
import { createMetaManager } from 'vue-meta'
import { createPinia } from 'pinia'
import { vfmPlugin } from 'vue-final-modal'
import VueClickAway from "vue3-click-away";

window.axios = axios;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = appUrl;

console.log('hiiii ' + appUrl);

const app = createApp(App)
  .component('AppLink', AppLink)
  .component('SubmitButton', SubmitButton)
  .component('ValidationErrors', ValidationErrors)
  .component('Snack', Snack)
  .use(createMetaManager())
  .use(router)
  .use(vfmPlugin)
  .use(VueClickAway)
  .use(createPinia())
  .directive('observe-visibility', {
    beforeMount: (el, binding, vnode) => {
      vnode.context = binding.instance;
      ObserveVisibility.bind(el, binding, vnode);
    },
    update: ObserveVisibility.update,
    unmounted: ObserveVisibility.unbind,
  })
  .mount('#app');
