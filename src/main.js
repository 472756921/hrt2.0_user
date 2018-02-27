import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';

axios.defaults.withCredentials=true;
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
