<template>
  <div class="login-container">
    <img class="logo" src="/static/images/logo@2x.png" alt="">
    <p class="title">酷丁鱼在线课堂</p>
    <p class="subtitle">陪伴从心开始</p>
    <img class="wx-login" src="/static/images/wx_login@2x.png" alt="">
    <p @click="phoneLogin" class="phone-login">手机号登录</p>
    <p class="bottom-tip">Copyright © 2019 酷丁鱼在线课堂 </p>
  </div>
</template>

<script>
export default {
  onShow(){
    if (wx.getStorageSync('token')){
      wx.reLaunch({ url: '/pages/home/main' });
    }
  },
  methods:{
    phoneLogin(){
      wx.navigateTo({
        url: '/pages/phone-login/main'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo{
    margin-top:180rpx;
    width: 212rpx;
    height: 212rpx;
  }
  .title{
    color:#333333;
    font-size: 24px;
    margin-top: 20rpx;
  }
  .subtitle{
    color:#A8A8A8;
    font-size: 12px;
    margin-top: 30rpx;
    position: relative;
  }
  .wx-login{
    margin-top:200rpx;
    width:568rpx;
    height: 98rpx;
  }
  .phone-login{
    margin-top:40rpx;
    color:#333333;
    font-size: 15px;
  }
  .bottom-tip{
    color:#A8A8A8;
    font-size: 10px;
    position: absolute;
    bottom:30rpx;
  }
}
</style>
