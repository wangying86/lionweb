import Vue from 'vue'
import './plugins/axios'


import router from './router'
import store from './store'

import axios from 'axios'
import Vueaxios from 'vue-axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import App from './App.vue'


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$ajax = axios
// axios.defaults.baseURL = '/shuangmeimelody'
// axios.defaults.headers.post['Content-Type'] = 'application/json';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
