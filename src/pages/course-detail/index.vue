<template>
  <div class="course-detail-container" v-if="course_detail">
    <!-- 1.0 封面图 -->
    <div>
      <div v-if="!isPlaying" class="cover_image">
        <img :src="course_detail.course.cover_image_url" alt="">
        <div class="play">
          <img @click="playCourseVideo" src="/static/images/play@2x.png" alt="">
          <p>播放课程简介</p>
        </div>
      </div>
      <div v-else class="course_video">
        <video id="courseVideoId" :src="course_detail.course.course_video_url"></video>
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
        <div class="share-button">
          <img src="/static/images/share@2x.png" alt="">
        </div>
      </div>
    </div>
    <!-- 3.0 目录、讲师介绍、评价 -->
    <div class="catalog">
      <div class="head">
        <span @click="selectIndex = index" :class="{active:selectIndex===index}" v-for="(item,index) in menus" :key="index">{{item}}</span>
      </div>
      <div class="body">
        <div class="catelog-container" v-if="selectIndex === 0">
          <p v-for="(item,index) in course_detail.videos" :key="item.id">
            {{index+1}}.{{item.name}}
          </p>
          <p v-if="!course_detail.videos">
            暂无课程视频哦，请联系客服添加~
          </p>
        </div>
        <div class="lecturer-container" v-else-if="selectIndex === 1">
          <div v-if="course_detail.lecturer" class="info">
            <img :src="course_detail.lecturer.avatar" alt="">
            <div class="name-follow">
              <p>{{course_detail.lecturer.name}}</p>
              <p>关注人数{{course_detail.lecturer.follow_count}}</p>
            </div>
            <p class="follow">
              关注
            </p>
          </div>
          <div v-if="course_detail.lecturer" class="introduce">
            <p>{{course_detail.lecturer.introduction}}</p>
          </div>
          <p style="color:#636363;font-size:15px;" v-if="!course_detail.lecturer">
            暂无讲师简介哦~
          </p>
        </div>
        <div class="comment-container" v-else>
          <div class="comment-item" v-for="item in course_detail.comments" :key="item.id">
            <div class="info">
              <img :src="item.avatar" alt="">
              <div class="nickname-content">
                <div class="nickname">
                  <div style="margin-top:12rpx;">{{item.nickname}}</div>&nbsp;&nbsp;
                  <div><star :score="item.score"/></div>
                </div>
                <div>
                  {{item.content}}
                </div>
              </div>
              <p class="time">1小时前<p/>
            </div>
            <div class="star">
              <!-- <img src="/static/images/comment@2x.png" alt=""> -->
              <img @click="like(item)" :src="item.is_like == 1 ? '/static/images/like_normal@2x.png' : '/static/images/like_highlight@2x.png'" alt="">
            </div>
          </div>
          <p style="color:#636363;font-size:15px;padding:38rpx;" v-if="!course_detail.comments">
            暂无评论哦，请学习之后再评价~
          </p>
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
      course_id:null, //课程id
      course_detail:null, // 课程详情数据
      isPlaying:false, //是否正在播放视频
      menus:['目录','讲师介绍','评价'],
      selectIndex:0 // 选中的索引
    }
  },
  onLoad(options){
    this.course_id = options.id
    this.getCourseDetailData()
  },
  onShow(){
    this.getCourseDetailData()
  },
  onUnload(){
    this.isPlaying = false
    this.selectIndex = 0
  },
  methods:{
    async getCourseDetailData(){
      const res = await this.$axios.get(`course/${this.course_id}`)

      this.course_detail = res.data.message
      // 设置评论总数
      this.menus[2] = `评价(${res.data.message.commentTotal})`
    },
    // 播放课程简介视频
    playCourseVideo(){
      this.isPlaying = true
      const videoContent = wx.createVideoContext('courseVideoId')
      videoContent.play()
    },
    // 点赞
    async like(comment){
      switch (comment.is_like) {
        case 1:
          comment.is_like = 2
          break;

        case 2:
          comment.is_like = 1
          break;

        default:
          break;
      }

      const res = await this.$axios.post('/comment/like',{
        comment_id: comment.id,
        is_like: comment.is_like
      })
    },
    // 去看视频学习
    goToStudy(){
      const videoContent = wx.createVideoContext('courseVideoId')
      videoContent.pause()

      wx.navigateTo({
        url: `/pages/play/main?id=${this.course_id}&title=${this.course_detail.course.title}&price=${this.course_detail.course.price}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
.course-detail-container{
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
  .course_video{
    width: 750rpx;
    height: 434rpx;
    video{
      width: 750rpx;
      height: 434rpx;
    }
  }
  .introduction{
    z-index: 3;
    position: absolute;
    margin-top: -10rpx;
    border-radius:16px 16px 0px 0px;
    left:0;
    right: 0;
    height: 452rpx;
    background-color: #F8F8F8;
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
      .share-button{
        width: 92rpx;
        height: 92rpx;
        background-color: #fff;
        border-radius: 10rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        float: right;
        img{
          width:34rpx;
          height: 34rpx;
        }
      }
    }
  }
  .catalog{
    margin-top:520rpx;
    // position: absolute;
    z-index:5;
    width:750rpx;
    height:582rpx;
    background-color: #F8F8F8;
    .head{
      height: 120rpx;
      background-color: #F8F8F8;
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
    .catelog-container{
      padding:40rpx;
      height:582rpx;
      p{
        color:#636363;
        font-size: 15px;
        height: 80rpx;
        line-height: 80rpx;
      }
    }
    .lecturer-container{
      padding:40rpx;
      .info{
        height: 200rpx;
        display: flex;
        align-items: center;
        .name-follow{
          margin-left: 30rpx;
          flex:1;
          p:nth-child(1){
            font-size: 17px;
            color:#333333;
          }
          p:nth-child(2){
            font-size: 14px;
            margin-top: 15rpx;
            color:#A8A8A8;
          }
        }
        img{
          margin-left: 12rpx;
          width:120rpx;
          height: 120rpx;
        }
        .follow{
          width:136rpx;
          height: 52rpx;
          line-height: 52rpx;
          text-align: center;
          border: 1px solid #A8A8A8;
          border-radius: 26rpx;
          color:#A8A8A8;
          font-size: 14px;
        }
      }
      .introduce{
        p{
          margin-left: 12rpx;
          font-size:12px;
          font-family:PingFang SC;
          font-weight:400;
          line-height:20px;
          color:rgba(168,168,168,1);
          opacity:1;
        }
      }
    }
    .comment-item{
      padding:40rpx;
      height: 180rpx;
      border-bottom: 2px solid #F1F1F1;
      .info{
        height: 120rpx;
        display: flex;
        align-items: center;
        img{
          margin-left:6rpx;
          width:96rpx;
          height: 96rpx;
        }
        .nickname-content{
          flex:1;
          margin-left:30rpx;
          margin-right: 10rpx;
          .nickname{
            color:#333333;
            font-size: 15px;
            font-weight: bold;
            align-items: center;
            display: flex;
            div{
              height: 100%;
              display: inline-block;
            }
          }
          div:nth-child(2){
            margin-top:16rpx;
            color:#A8A8A8;
            font-size: 12px;
          }
        }
        .time{
          color:#A8A8A8;
          font-size: 11px;
        }
      }
    }
    .star{
      img{
        margin-top: 30rpx;
        width:44rpx;
        height: 44rpx;
        float: right;
        margin-right: 20rpx;
      }
      img:nth-child(0){
        margin-right: 20rpx;
      }
    }
  }
}
</style>

