import Vue from 'vue'
import './plugins/axios'


import router from './router'
import store from './store'

import axios from 'axios'
import Vueaxios from 'vue-axios'

//引入css

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
//引入video插件
import VideoPlayer from 'vue-video-player'
//引入 hls
import 'videojs-contrib-hls'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import App from './App.vue'


Vue.config.productionTip = false
Vue.use(VideoPlayer);
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
