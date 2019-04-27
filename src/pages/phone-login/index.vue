<template>
  <div class="phone-login-container">
    <p class="phone-validate">手机号验证</p>
    <p class="subtitle">用于即使获取课程最新信息</p>
    <div class="content">
      <input
        v-model="phone"
        class="phone"
        placeholder="请输入您的手机号"
        type="text"
      >
      <div
        @click="getVcode"
        class="get_vcode"
      >获取验证码</div>
      <input
        v-model="vcode"
        class="vcode"
        placeholder="请输入验证码"
        type="text"
      >
    </div>
    <div class="phone-login">
      <img
        @click="phoneLogin"
        src="/static/images/phone_login@2x.png"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '17704051019', // 手机号
      vcode: '' // 验证码
    }
  },
  methods: {
    // 获取验证码
    async getVcode() {
      if (this.phone.trim().length === 0) {
        wx.showToast({
          title: '手机号不能为空', //提示的内容,
          icon: 'none' //图标
        })
        return
      }

      // const res = await this.$axios.get('user/vcode', {
      //   params: {
      //     phone: this.phone
      //   }
      // })

      const res = await this.$axios.get(`user/vcode?phone=${this.phone}`)

      wx.showToast({
        title: '' + res.data.vcode, //提示的内容,
        icon: 'none' //图标
      })
    },
    // 手机号登录
    async phoneLogin() {
      const res = await this.$axios.post('user/login', {
        phone: this.phone,
        vcode: this.vcode
      })

      if (res.data.status === 0) {
        // 登录成功
        // 保存token
        wx.setStorageSync('token', res.data.token)

        // 跳转到首页
        wx.reLaunch({ url: '/pages/home/main' })
      } else {
        wx.showModal({
          content: res.data.message, //提示的内容,
          showCancel: false, //是否显示取消按钮,
          confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: '#ff8d44' //确定按钮的文字颜色
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.phone-login-container {
  padding: 0rpx 68rpx;
  .phone-validate {
    margin-top: 100rpx;
    color: #393939;
    font-size: 43px;
  }
  .subtitle {
    margin-top: 20rpx;
    color: #a8a8a8;
    font-size: 30rpx;
  }
  .content {
    margin-top: 150rpx;
    height: 250rpx;
    position: relative;
    .phone {
      height: 100rpx;
      font-size: 15px;
      // background-color: green;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        background-color: #e9e9e9;
        left: 0;
        right: 0;
        height: 1px;
        bottom: 1px;
      }
    }
    .get_vcode {
      position: absolute;
      right: 0;
      top: 20rpx;
      width: 164rpx;
      height: 56rpx;
      text-align: center;
      line-height: 56rpx;
      font-size: 24rpx;
      color: #a8a8a8;
      border: 1px solid rgba(168, 168, 168, 1);
      border-radius: 20px;
      z-index: 2;
    }
    .vcode {
      margin-top: 30px;
      height: 100rpx;
      font-size: 15px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        background-color: #e9e9e9;
        left: 0;
        right: 0;
        height: 1px;
        bottom: 1px;
      }
    }
  }
  .phone-login {
    margin-top: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 568rpx;
      height: 98rpx;
    }
  }
}
</style>

