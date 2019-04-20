import Vue from 'vue'
import axios from 'axios'

// 基准路径
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'

// 拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    if (wx.getStorageSync('token')) {
      config.headers.Authorization = wx.getStorageSync('token')
    }

    config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE1NTU3Mjg3MjAsImV4cCI6MTU1NTgxNTEyMH0.fq5nY-11JMq9xncfldddMu4XKA6xgzgUzcEPH4zo9gQ"

    // Appkey
    config.headers.appkey = "112233"

    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 适配器
axios.defaults.adapter = function(config) {
  return new Promise((resolve, reject) => {
    mpvue.request({
      url: config.url, //开发者服务器接口地址",
      data: config.data, //请求的参数",
      method: config.method,
      // todo header
      header: config.headers,
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

// 挂在到Vue的原型上
Vue.prototype.$axios = axios
