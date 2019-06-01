<template>
  <div class="pay-container">
    <div class="order-info">
      <img src="/static/temp/order@2x.png" alt="">
      <div class="name">
        <p>{{course_title}}</p>
        <p>永久观看</p>
      </div>
      <p class="price">
        ￥{{course_price}}
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
        <p>￥{{course_price}}</p>
        <img @click="createOrderAndPay" class="pay" src="/static/images/wx_pay@2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      course_id:null,
      course_title:null,
      course_price:null
    }
  },
  onLoad(options){
    this.course_id = options.course_id
    this.course_title = options.course_title
    this.course_price = options.course_price
  },
  methods:{
    async createOrderAndPay(){
      // 创建订单
      const res = await this.$axios.post('order/create',{
        course_id:this.course_id,
        price:this.course_price
      })

      if (res.data.status === 0){
        // 模拟支付订单
        // this.payOrder(res.data.order_id)

        // 微信支付订单
        this.wxPayOrder(res.data.order_number)
      }
    },
    async payOrder(order_id){
      const res = await this.$axios.post('order/pay',{
        order_id
      })

      if (res.data.status === 0){ // 支付成功
        wx.showToast({
          title: res.data.message, //提示的内容,
          icon: 'success', //图标,
          duration: 2000, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: res => {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1 // 回退前 delta(默认为1) 页面
              })
            }, 2000)
          }
        })
      }
    },
    async wxPayOrder(order_number){
      // 获取预付单信息
      const res = await this.$axios.post('pay/req_unifiedorder',{order_number})

      // 唤起微信微信支付
      mpvue.requestPayment({
        timeStamp: res.data.payorder.timeStamp,
        nonceStr: res.data.payorder.nonceStr,
        package: res.data.payorder.package,
        signType: res.data.payorder.signType,
        paySign: res.data.payorder.paySign,
        success: async res2 => {
          const res3 = await this.$axios.post('order/wxpaysuccess',{order_number})

          if (res3.data.status === 0){
            wx.showToast({
              title: '支付成功', //提示的内容,
              icon: 'none', //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透
            })

            setTimeout(() => {
              wx.navigateBack({
                delta: 1 // 回退前 delta(默认为1) 页面
              })
            }, 2000)
          }
        },
        fail: res => {
          wx.showToast({
            title: '支付失败', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透
          })
        }
      })
    }
  }
}
</script>

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
        margin-left: 80rpx;
        width: 328rpx;
        height: 92rpx;
      }
    }
  }
}
</style>
