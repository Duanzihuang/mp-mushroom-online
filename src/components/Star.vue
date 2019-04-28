<template>
  <div>
    <div class="star-bg">
      <img v-for="item in 5" :key="item" src="/static/images/star_empty@2x.png" alt="">
    </div>
    <div class="star">
      <img v-for="item in score" :key="item" src="/static/images/star_fill@2x.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    score:{
      type:Number
    }
  }
}
</script>

<style lang="less" scoped>
.star,.star-bg{
  display: flex;
  height: 50rpx;
  align-items: center;
  img{
    width:38rpx;
    height: 36rpx;;
  }
}
.star{
  position: absolute;
  margin-top:-50rpx;
}
</style>

