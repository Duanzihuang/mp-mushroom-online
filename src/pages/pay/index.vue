<template>
  <div class="pay-container">
    <div class="order-info">
      <img src="/static/temp/order@2x.png" alt="">
      <div class="name">
        <p>创意手绘班</p>
        <p>永久观看</p>
      </div>
      <p class="price">
        ￥259.00
      </p>
    </div>
    <div class="pay-style">
      <div>
        支付方式
      </div>
      <div class="wx-pay">
        <img src="/static/images/wx_pay_logo@2x.png" alt="">
        <div class="name">
          <p>微信支付</p>
          <p>微信安全支付</p>
        </div>
        <img class="select-img" src="/static/images/selected@2x.png" alt="">
      </div>
    </div>
    <p class="tip">
      注：该订单不支持退款、提交订单则表示您同意《用户付款协议》
    </p>
    <div class="bottom">
      <div class="content">
        <p>实付金额：</p>
        <p>￥259.00</p>
        <img class="pay" src="/static/images/wx_pay@2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pay-container{
  // position: relative;
  height: 100%;
  width:750rpx;
  .order-info{
    display: flex;
    width:750rpx;
    height: 272rpx;
    align-items: center;
    border-bottom: 1px solid #F1F1F1;
    img{
      padding-left: 32rpx;
      width: 300rpx;
      height: 200rpx;
    }
    .name{
      align-self: flex-start;
      margin-top:30rpx;
      margin-left: 30rpx;
      flex:1;
      p:nth-child(1){
        color:#343434;
        font-size: 19px;
        font-weight: bolod;
      }
      p:nth-child(2){
        margin-top: 20rpx;
        color:#A8A8A8;
        font-size: 12px;
      }
    }
    .price{
      align-self: flex-end;
      margin-bottom: 30rpx;
      color:#EE3939;
      font-size: 16px;
      font-weight: bold;
      padding-right: 32rpx;
    }
  }
  .pay-style{
    width: 750rpx;
    height: 410rpx;
    div:nth-child(1){
      padding-left: 32rpx;
      height: 100rpx;
      line-height: 100rpx;
      border-bottom: 1px solid #F1F1F1;
      color:#343434;
      font-size: 16px;
    }
    .wx-pay{
      height: 200rpx;
      align-items: center;
      display: flex;
      // justify-content: space-between;
      img:nth-child(1){
        padding-left: 32rpx;
        width: 38rpx;
        height: 34rpx;
      }
      .select-img{
        width: 36rpx;
        height: 36rpx;
        align-content: flex-end;
        padding-right: 32rpx;
      }
      .name{
        flex:1;
        margin-left: 40rpx;
        p:nth-child(1){
          color:#333333;
          font-size: 16px;
        }
        p:nth-child(2){
          color:#A8A8A8;
          font-size: 11px;
          margin-top: 10rpx;
        }
      }
    }
  }
  .tip{
    position: absolute;
    color:#DBDBDB;
    width: 750rpx;
    text-align: center;
    font-size: 10px;
    bottom:280rpx;
  }
  .bottom{
    width:750rpx;
    height: 214rpx;
    position: fixed;
    bottom: 0;
    .content{
      align-items: center;
      display: flex;
      height: 214rpx;
      background-color: #fff;
      p:nth-child(1){
        padding-left: 32rpx;
        color:#A2A2A2;
        font-size: 12px;
      }
      p:nth-child(2){
        color:#EE3939;
        font-size: 20px;
        margin-left: 20rpx;
        font-weight: bold;
      }
      .pay{
        margin-left: 50rpx;
        width: 328rpx;
        height: 92rpx;
      }
    }
  }
}
</style>
