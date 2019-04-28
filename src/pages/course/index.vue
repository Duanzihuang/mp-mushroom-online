<template>
  <div class="course-container">
    <navigator :url="'/pages/course-detail/main?id='+item.id" class="course-item" v-for="item in courses" :key="item.id">
      <img :src="item.icon" alt="">
      <p class="title">{{item.title}}</p>
      <p class="subtitle">{{item.subtitle}}</p>
      <p class="level" v-if="item.level === 1">初级</p>
      <p class="level" v-else-if="item.level === 2">中级</p>
      <p class="level" v-else-if="item.level === 3">高级</p>
    </navigator>
  </div>
</template>

<script>
export default {
  data(){
    return {
      courses:[]
    }
  },
  onLoad(){
    // 获取课程列表数据
    this.getCoursesData()
  },
  methods:{
    async getCoursesData(){
      const res = await this.$axios.get('course/list')

      this.courses = res.data.message
    }
  }
}
</script>

<style lang="less" scoped>
.course-container{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 32rpx;
}
.course-item{
  margin-left: 32rpx;
  margin-top: 32rpx;
  border-radius: 12rpx;
  background-color: white;
  width: 333rpx;
  height: 368rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin-top: 58rpx;
    width: 124rpx;
    height: 124rpx;
  }
  .title{
    margin-top: 28rpx;
    color:#333333;
    font-weight: bold;
    font-size: 32rpx;
  }
  .subtitle{
    color:#A8A8A8;
    font-size: 22rpx;
    margin-top: 12rpx;
  }
  .level{
    margin-top: 20rpx;
    color:#FFB37A;
    text-align: center;
    font-size:24rpx;
    line-height: 32rpx;
    width:92rpx;
    height:32rpx;
    border:2rpx solid rgba(255,179,122,1);
    opacity:1;
    border-radius:16rpx;
  }
}
</style>
