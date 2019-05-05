import Vue from 'vue'
import axios from 'axios'

// 基准路径

// 开发环境
// axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'

// 生产环境
axios.defaults.baseURL = 'http://huangjiangjun.top:3000/api/'


// 拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    if (wx.getStorageSync('token')) {
      config.headers.Authorization = wx.getStorageSync('token')
    }

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
    wx.showLoading({
      title: '数据加载中...', //提示的内容,
      mask: true //显示透明蒙层，防止触摸穿透
    });
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
