<template>
  <div class="my-container">
    <div class="header">
      <img class="avatar" :src="userInfo.avatar" alt="">
      <p class="nickname">{{userInfo.nickname}}</p>
    </div>
    <div class="tips">
      <div class="left">
        <p class="title">{{userInfo.study_hour}}</p>
        <p class="subtitle">累计学习小时</p>
      </div>
      <div class="middle">
        <p class="title">{{userInfo.study_hour}}</p>
        <p class="subtitle">我的关注</p>
      </div>
      <div class="right">
        <p class="title">{{userInfo.course_count}}</p>
        <p class="subtitle">我的课程</p>
      </div>
    </div>
    <div class="cells">
      <div class="cell">
        <p>学习历史</p>
        <img src="/static/images/arrow@2x.png" alt="">
      </div>
      <div class="cell">
        <p>消息提醒</p>
        <img src="/static/images/arrow@2x.png" alt="">
      </div>
      <div class="cell">
        <p>清楚缓存</p>
        <img src="/static/images/arrow@2x.png" alt="">
      </div>
      <div class="cell">
        <p>商务合作</p>
        <img src="/static/images/arrow@2x.png" alt="">
      </div>
      <div class="cell">
        <p>在线客服</p>
        <img src="/static/images/arrow@2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userInfo: null
    }
  },
  onLoad(){
    this.getUserInfoData()
  },
  methods:{
    async getUserInfoData(){
      const res = await this.$axios.get('my/info')

      this.userInfo = res.data.message
    }
  }
}
</script>

<style lang="less" scoped>
.my-container{
  position:relative;
}
.header{
  width: 750rpx;
  height: 440rpx;
  background-color: #FF8D43;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .avatar{
    width: 176rpx;
    height: 176rpx;
    border-radius: 50%;
  }
  .nickname{
    margin-top: 30rpx;
    font-size: 21px;
    color:#FFFFFF;
  }
}
.tips{
  position: absolute;
  top:400rpx;
  left:32rpx;
  right: 32rpx;
  border-radius: 12rpx;
  height: 174rpx;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .title{
    text-align: center;
    font-size: 26px;
    color:#333333;
  }
  .subtitle{
    margin-top: 10rpx;
    text-align: center;
    font-size: 12px;
    color:#A8A8A8;
    font-weight: bold;
  }
  .left,.middle,.right{
    flex:1;
  }
  .middle{
    position:relative;
    &::before{
      content:'';
      position:absolute;
      left:0;
      top:30rpx;
      height:62rpx;
      width:3rpx;
      background-color:#EBEBEB;
    }
    &::after{
      content:'';
      position:absolute;
      right:0;
      top:30rpx;
      height:62rpx;
      width:3rpx;
      background-color:#EBEBEB;
    }
  }
}

.cells{
  background-color: #fff;
  border-radius: 12rpx;
  margin-top: 160rpx;
  margin-left: 32rpx;
  margin-right: 32rpx;
  height: 600rpx;
  margin-bottom: 32rpx;
  .cell{
    height:120rpx;
    display:flex;
    align-items:center;
    justify-content: space-between;
    border-bottom:1px solid #F8F8F8;
    padding:0rpx 20rpx;
    p{
      font-size:30rpx;
      color:#333333;
    }
    img{
      width:48rpx;
      height:48rpx;
    }
  }
}
</style>

