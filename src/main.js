import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

// 使用axios
import './axios'

const app = new Vue(App)
app.$mount()
