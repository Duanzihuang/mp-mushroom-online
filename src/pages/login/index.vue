<template>
  <div style="height:100%;">
    <div v-if="!isWxLogin" class="login-container">
      <img class="logo" src="/static/images/logo@2x.png" alt="">
      <p class="title">蘑菇在线</p>
      <img class="login-tips" src="/static/images/login_tips@2x.png" alt="">
      <button open-type="getUserInfo" @getuserinfo="wxLogin" plain class="wx-login-button">
        <!-- <img @click="goToWxLogin" class="wx-login-img" src="/static/images/wx_login@2x.png" alt=""> -->
        <img class="wx-login-img" src="/static/images/wx_login@2x.png" alt="">
      </button>
      <p @click="phoneLogin" class="phone-login">手机号登录</p>
      <p class="bottom-tip">Copyright © 2019 蘑菇在线 </p>
    </div>
    <div class="wx-login-container" v-else-if="isWxLogin">
      <!-- <div class="wx-login-tip1">
        <img src="/static/images/auth_tips@2x.png" alt="">
        <p>需要您的授权后才能继续进行使用</p>
      </div> -->
      <!--
      <div class="wx-login-tip1-cover"></div>
      <div class="wx-login-tip2">
        <div class="head">
          <img class="head-img" src="/static/images/mushroom_logo@2x.png" alt="">
          <span>蘑菇在线少儿编程 申请</span>
        </div>
        <div class="body1">
          获取你的昵称、头像、地区及性别
        </div>
        <div class="body2">
          <img src="/static/images/auto_logo@2x.png" alt="">
          <div>
            <span>酷小鱼</span>
            <span>微信个人信息</span>
          </div>
        </div>
        <div class="footer">
          <button @click="cancel">取消</button>
          <button open-type="getUserInfo" @getuserinfo="wxLogin">允许</button>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isWxLogin:false
    }
  },
  onShow(){
    if (wx.getStorageSync('token')){
      wx.reLaunch({ url: '/pages/home/main' });
    }
  },
  methods:{
    // 跳转到手机号登录页面
    phoneLogin(){
      wx.navigateTo({
        url: '/pages/phone-login/main'
      })
    },
    // 选择微信登录
    goToWxLogin(){

    },
    // 微信登录
    wxLogin(e){
      // this.isWxLogin = true

      if (e.mp.detail.errMsg === 'getUserInfo:fail auth deny') {
        // this.isWxLogin = false
        return
      }

      // 获取登录的code
      wx.login({
        success: async ({code}) => {
          const res = await this.$axios.post('/user/wxlogin',{
            code,
            nickname:e.mp.detail.userInfo.nickName,
            avatar:e.mp.detail.userInfo.avatarUrl
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
      })
    },
    // 取消
    cancel(){
      this.isWxLogin = false
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
  .login-tips{
    margin-top: 30rpx;
    height: 34rpx;
    width:292rpx;
    position: relative;
  }
  .wx-login-button{
    margin-top:200rpx;
    width:568rpx;
    height: 98rpx;
    padding:0;
    border:none;
  }
  .wx-login-img{
    // margin-top:200rpx;
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
    bottom:40rpx;
  }
}
.wx-login-container{
  position: relative;
  .wx-login-tip1{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 450rpx;
    padding-top: 50rpx;
    img{
      width: 198rpx;
      height: 198rpx;
    }
    p{
      color:#BEBEBE;
      margin-top:50rpx;
      font-size: 13px;
    }
  }
  .wx-login-tip1-cover{
    position: fixed;
    left:0;
    right:0;
    top:0;
    height: 500rpx;
    background:rgba(0,0,0,1);
    opacity:0.16;
  }
  .wx-login-tip2{
    position: fixed;
    left:0;
    right:0;
    bottom: 0;
    z-index: 1;
    background-color: #FFF;
    width: 750rpx;
    height: 720rpx;
    padding-top:38rpx;
    padding-left:38rpx;
    .head{
      height: 60rpx;
      display: flex;
      align-items: center;
      .head-img{
        width:54rpx;
        height: 54rpx;
        border-radius: 54rpx;
      }
      span{
        margin-left:20rpx;
        color:#333333;
        font-weight: bold;
        font-size: 16px;
      }
    }
    .body1{
      height: 100rpx;
      line-height: 100rpx;
      font-weight: bold;
      margin-top:50rpx;
      color:#020202;
      font-size: 25px;
      width: 650rpx;
    }
    .body2{
      margin-top:120rpx;
      display: flex;
      height: 150rpx;
      align-items: center;
      position: relative;
      img{
        width: 94rpx;
        height: 94rpx;
      }
      div{
        margin-left:50rpx;
        display: flex;
        flex-direction: column;
        span:nth-child(1){
          color:#333333;
          font-size: 16px;
          font-weight: bold;
        }
        span:nth-child(2){
          margin-top:15rpx;
          color:#D1D1D1;
          font-size: 14px;
        }
      }
      &::before{
        content:'';
        background-color:#EDEDED;
        position: absolute;
        top:0;
        left:0;
        width:674rpx;
        height: 1px;
      }
      &::after{
        content:'';
        background-color:#EDEDED;
        position: absolute;
        bottom:0;
        left:0;
        width:674rpx;
        height: 1px;
      }
    }
    .footer{
      display: flex;
      height: 260rpx;
      align-items: center;
      button{
        width:314rpx;
        height: 82rpx;
        line-height: 82rpx;
        padding:0;
        margin:0;
        color: #2A2A2A;
        font-size: 18px;
      }
      button:nth-child(2){
        margin-left: 50rpx;
        color:#FFF;
        background-color: #57BE6A;
      }
    }
  }
}
</style>
