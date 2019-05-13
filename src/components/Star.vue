<template>
  <div class="container">
    <div class="star-bg">
      <img @click="star(index)" v-for="(item,index) in 5" :key="item" src="/static/images/star_empty@2x.png" alt="">
    </div>
    <div class="star">
      <img @click="star(index)" v-for="(item,index) in score" :key="item" src="/static/images/star_fill@2x.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    score:{
      type:Number,
      default:5
    },
    readonly:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    star(index){
      if (this.readonly) return

      this.score = index + 1

      // 传递选择的分数给父组件
      this.$emit('changeScore',this.score)
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  position: relative;
}
.star,.star-bg{
  float: left;
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
  top:0;
  left:0;
}
</style>

