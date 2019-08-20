import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

import fastclick from 'fastclick'


// 引入css重置
import './assets/styles/reset.scss'

// 引入字体文件css
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
