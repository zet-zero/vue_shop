import Vue from 'vue'
import './plugins/axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//自定义图标
import './assets/font/iconfont.css'
//全局样式
import './assets/css/global.css'
//导入axios
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(ElementUI)
//挂载axios
Vue.prototype.$http = axios
//访问根路径
// axios.defaults.baseURL = "http://localhost:8080"


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
