<template>
  <div class="play-container" v-if="course_detail">
    <!-- 1.0 封面图 -->
    <div class="cover_image">
      <img :src="course_detail.course.cover_image_url" alt="">
    </div>
    <!-- 2.0 简介 -->
    <div class="introduction">
      <div class="title-and-info">
        <p class="title">{{course_detail.course.title}}</p>
        <p class="info">
          <span>{{course_detail.course.study_count}}人学过</span>
          <span>难度:{{level}}人学过</span>
          <span>时长:{{course_detail.course.class_hour}}</span>
        </p>
      </div>
      <div class="comment">
        <img src="/static/images/evaluate@2x.png" alt="">
      </div>
    </div>
    <!-- 3.0 课程进度 -->
    <div class="course-progress">
      <div class="title">课程进度</div>
      <div class="catelog-container">
          <p v-for="(item,index) in course_detail.videos" :key="item.id">
            <span>{{index+1}}.{{item.name}}</span>
            <span v-if="item.is_study == 1" class="studied">已学习</span>
            <span v-else :class="['time',index === playIndex ? 'active' : '']">{{item.duration}}</span>
          </p>
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
      playIndex:3 // 正在播放视频的索引
    }
  },
  computed: {
    level(){
      let levelName = "初级"

      if (this.course_detail){
        const level = this.course_detail.course.level
        switch (level) {
          case 1:
            levelName = "初级"
            break

          case 2:
            levelName = "中级"
            break

          case 3:
            levelName = "高级"
            break;

          default:
            break
        }
      }

      return levelName
    }
  },
  onLoad(options){
    this.getCourseDetailData(options.id)
  },
  methods:{
    async getCourseDetailData(id){
      const res = await this.$axios.get(`course/play/${id}`)

      this.course_detail = res.data.message
    }
  }
}
</script>

<style lang="less" scoped>
.play-container{
  background-color:#EFEFEF;
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
  }
  .introduction{
    z-index: 3;
    position: absolute;
    margin-top: -30rpx;
    border-radius:16px 16px 0px 0px;
    border-bottom: 1px solid #F5F5F5;
    // width:750rpx;
    left:0;
    right: 0;
    height: 192rpx;
    background-color: #FFFFFF;
    padding:38rpx 32rpx;
    display: flex;
    align-items: center;
    .title-and-info{
      flex:1;
      .title{
        color:#343434;
        font-size: 24px;
        font-weight: bold;
      }
      .info{
        margin-top:12rpx;
        height: 34rpx;
        line-height: 34rpx;
        color:#818181;
        font-size: 12px;
        span{
          padding-right: 15rpx;
        }
        span:nth-child(2),span:nth-child(3){
          padding-left: 15rpx;
        }
        span:nth-child(2){
          position: relative;
          &::before{
            position: absolute;
            content:'';
            background-color: #EBEBEB;
            left:0rpx;
            width:1px;
            top:8rpx;
            height: 20rpx;
          }
          &::after{
            position: absolute;
            content:'';
            background-color: #EBEBEB;
            right:0rpx;
            width:1px;
            top:8rpx;
            height: 20rpx;
          }
        }
      }
    }
    .comment{
      margin-top:32rpx;
      img{
        width: 198rpx;
        height: 80rpx;
      }
    }
  }
  .course-progress{
    margin-top:222rpx;
    padding: 44rpx 32rpx;
    background-color: #FFF;
    .title{
      color:#343434;
      font-size: 15px;
    }
    .catelog-container{
      p{
        color:#636363;
        font-size: 15px;
        height: 80rpx;
        line-height: 80rpx;
      }
      .studied{
        float:right;
        font-size:10px;
        text-align: center;
        color:#AAAAAA;
        background-color: #F5F5F5;
        border-radius: 12rpx;
        width:98rpx;
        height: 48rpx;
        line-height: 48rpx;
      }
      .time{
        float:right;
      }
      .active{
        color:#FF5E00;
      }
    }
  }
}
</style>

