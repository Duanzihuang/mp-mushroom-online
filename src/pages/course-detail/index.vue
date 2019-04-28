<template>
  <div class="course-detail-container" v-if="course_detail">
    <!-- 1.0 封面图 -->
    <div class="cover_image">
      <img :src="course_detail.course.cover_image_url" alt="">
      <div class="play">
        <img src="/static/images/play@2x.png" alt="">
        <p>播放课程简介</p>
      </div>
    </div>
    <!-- 2.0 简介 -->
    <div class="introduction">
      <div class="title-price">
        <span>{{course_detail.course.title}}</span>
        <span>￥{{course_detail.course.price}}.00</span>
      </div>
      <p class="introduce">{{course_detail.course.introduction}}</p>
      <div class="star">
        <star :score="course_detail.course.score"></star>
        <p>{{course_detail.course.study_count}}人在学</p>
      </div>
      <div class="study-share">
        <img @click="goToStudy" src="/static/images/start_study@2x.png" alt="">
      </div>
    </div>
    <!-- 3.0 目录、讲师介绍、评价 -->
    <div class="catalog">
      <div class="head">
        <span @click="selectIndex = index" :class="{active:selectIndex===index}" v-for="(item,index) in menus" :key="index">{{item}}</span>
      </div>
      <div class="body">
        <div v-if="selectIndex === 0">
          目录
        </div>
        <div v-else-if="selectIndex === 1">
          讲师
        </div>
        <div v-else>
          评价
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入子组件
import Star from '../../components/Star'
export default {
  components:{
    Star
  },
  data(){
    return {
      course_detail:null, // 课程详情数据
      menus:['目录','讲师介绍','评价(2541)'],
      selectIndex:0 // 选中的索引
    }
  },
  onLoad(options){
    this.getCourseDetailData(options.id)
  },
  methods:{
    async getCourseDetailData(id){
      const res = await this.$axios.get(`course/${id}`)

      this.course_detail = res.data.message
    },
    // 去学习
    goToStudy(){
      console.log("去学习")
    }
  }
}
</script>

<style lang="less" scoped>
.course-detail-container{
  position: relative;
  .cover_image{
    width: 750rpx;
    height: 434rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 750rpx;
      height: 434rpx;
    }
    position: relative;
    .play{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      img{
        width:164rpx;
        height: 164rpx;
      }
      p{
        margin-top: 10rpx;
        color:#E9E9E9;
        font-size: 15px;
      }
    }
  }
  .introduction{
    z-index: 3;
    position: absolute;
    margin-top: -30rpx;
    border-radius:16px 16px 0px 0px;
    // width:750rpx;
    left:0;
    right: 0;
    height: 452rpx;
    background-color: #fff;
    padding:38rpx 32rpx;
    .title-price{
      margin-top: 30rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span:nth-child(1){
        font-size: 24px;
        color:#343434;
        font-weight: Bold;
      }
      span:nth-child(2){
        font-size: 22px;
        color:#EE3939;
      }
    }
    .introduce{
      color:#818181;
      font-size: 12px;
      margin:40rpx 0rpx;
    }
    .star{
      display: flex;
      p{
        height: 50rpx;
        line-height: 50rpx;
        margin-left: 20rpx;
        font-size: 12px;
        color:#FE8E38;
      }
    }
    .study-share{
      margin-top: 60rpx;
      img:nth-child(1){
        width: 568rpx;
        height: 92rpx;
      }
    }
  }
  .catalog{
    margin-top:520rpx;
    // position: absolute;
    z-index:5;
    width:750rpx;
    height:582rpx;
    background-color: #fff;
    .head{
      height: 120rpx;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #F5F5F5;
      span{
        text-align: center;
        color:#A8A8A8;
        font-size: 14px;
        height: 120rpx;
        line-height: 120rpx;
        flex:1;
        position: relative;
      }
      .active{
          color:#333333;
          font-weight: bold;
          &::after{
            content:'';
            position: absolute;
            left:88rpx;
            bottom: 0px;
            width: 74rpx;
            height: 3px;
            background-color: #FF8E43;
          }
        }
    }
  }
}
</style>

