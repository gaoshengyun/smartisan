import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

import fastclick from 'fastclick'


// 引入css重置
import './assets/styles/reset.scss'

// 引入字体文件css
import './assets/fonts/iconfont.css'

// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
