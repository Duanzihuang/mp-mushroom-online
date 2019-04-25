<template>
  <div class="home-container">
    <!-- 搜索框 -->
    <search-bar placeholder="请输入课程的名称"></search-bar>
    <!-- 轮播图 -->
    <swiper indicator-dots circular autoplay indicator-active-color="#fff" :interval="3000">
        <block v-for="item in swipers" :key="item.id">
            <swiper-item>
                <image :src="item.img_url"></image>
            </swiper-item>
        </block>
    </swiper>
    <!-- 推荐课程 -->
    <div>
      <div class="tips">
        <p>推荐课程</p>
        <img src="/static/images/arrow@2x.png" alt="">
      </div>
      <scroll-view scroll-x class="course-container">
        <div class="course-item" v-for="item in courses" :key="item.id">
          <img :src="item.icon" alt="">
        </div>
      </scroll-view>
    </div>
    <!-- 热门视频 -->
    <div>
      <div class="tips">
        <p>热门视频</p>
        <img src="/static/images/arrow@2x.png" alt="">
      </div>
      <div class="hot-video">
        <div class="video-item" v-for="item in videos" :key="item.id">
          <img :src="item.cover_photo_url" alt="">
          <p class="title">{{item.name}}</p>
          <p class="subtitle">{{item.view_count}}人已观看</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入搜索框组件
import SearchBar from '../common/SearchBar'

export default {
  components:{
    SearchBar
  },
  data() {
    return {
      swipers: [], // 轮播图
      courses:[], // 推荐课程
      videos:[] // 热门视频
    }
  },
  onLoad() {
    this.getSwipersData()

    this.getRecommendCoursesData()

    this.getHotVideosData()
  },
  methods: {
    // 获取轮播图数据
    async getSwipersData() {
      const res = await this.$axios.get('home/swipers')

      this.swipers = res.data.message
    },
    // 获取推荐课程数据
    async getRecommendCoursesData(){
      const res = await this.$axios.get('home/course')

      this.courses = res.data.message
    },
    // 获取热门视频
    async getHotVideosData(){
      const res = await this.$axios.get('home/video')

      this.videos = res.data.message
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 20rpx;
  background-color: #fff;
}
swiper{
  width:100%;
  height: 400rpx;
  swiper-item{
    width:100%;
    height: 100%;
    border-radius: 20rpx;
    overflow: hidden;
  }
  image{
    width:100%;
    height: 100%;
  }
}
.tips{
  height:120rpx;
  display:flex;
  align-items:center;
  justify-content:space-between;
  p {
    font-size:36rpx;
    font-weight:700;
    color:#212121;
  }
  img{
    width:48rpx;
    height:48rpx;
  }
}
.course-container{
  height:170rpx;
  white-space: nowrap;
  .course-item{
    width:296rpx;
    height:168rpx;
    display: inline-block;
    margin-right: 32rpx;
    img{
      width:100%;
      height:100%;
    }
  }
}
.hot-video{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .video-item{
    width:340prx;
    img{
      width:340rpx;
      height: 210rpx;
      border-radius: 12rpx;
    }
    .title{
      margin-top: 15rpx;
      color:#262626;
      font-size: 26rpx;
    }
    .subtitle{
      margin-top: 15rpx;
      margin-bottom: 15rpx;
      color:#959595;
      font-size: 18rpx;
    }
  }
}
</style>

