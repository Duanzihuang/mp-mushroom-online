<template>
  <div class="play-container" v-if="course_detail">
    <!-- 1.0 封面图 -->
    <div class="cover_image">
      <!-- <img :src="course_detail.course.cover_image_url" alt="">
       -->
      <video @play="onVideoPlay" id="myVideo" :src="video_url" controls></video>
    </div>
    <!-- 2.0 简介 -->
    <div class="introduction">
      <div class="title-and-info">
        <p class="title">{{course_detail.course.title}}</p>
        <p class="info">
          <span>{{course_detail.course.study_count}}人学过</span>
          <span>难度:{{level}}</span>
          <span>时长:{{course_detail.course.course_duration}}</span>
        </p>
      </div>
      <div class="comment">
        <img @click="evaluate" src="/static/images/evaluate@2x.png" alt="">
      </div>
      <Modal @postComment="postComment" :visible="isShowCommentModal" @close="closeModal">
        <div class="comment-content">
          <textarea v-model="content" placeholder="请输入评论内容哦~" rows="5"></textarea>
        </div>
        <div style="margin-top:10rpx;">
          <span>评分：</span>
          <div style="float:right;margin-right:300rpx;margin-top:-5rpx;">
            <Star @changeScore="getChangeSocre" :readonly="false"/>
          </div>
        </div>
      </Modal>
    </div>
    <!-- 3.0 课程进度 -->
    <div class="course-progress">
      <div class="title">课程进度</div>
      <div class="catelog-container">
          <p @click="playOneVideo(item,index)" v-for="(item,index) in course_detail.videos" :key="item.id">
            <span :class="{'active' : index === playIndex}">{{index+1}}.{{item.name}}</span>
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
import Modal from '../../components/Modal'
export default {
  components:{
    Star,
    Modal
  },
  data(){
    return {
      course_id:null, // 课程id
      course_title:null,// 课程标题
      course_price:null, // 课程价格
      video_url:null,
      course_detail:null, // 课程详情数据
      playIndex:0, // 正在播放视频的索引
      isValidateRight:false, // 是否校验过权限
      isShowCommentModal:false, // 是否显示评论框
      score:5, // 评论的分数
      content:'',// 评论的内容
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
    this.course_id = options.id
    this.course_title = options.title
    this.course_price = options.price
    this.getCourseDetailData(options.id)
  },
  methods:{
    async getCourseDetailData(id){
      const res = await this.$axios.get(`course/play/${id}`)

      this.course_detail = res.data.message
      this.video_url = this.course_detail.videos[0].video_url
    },
    // 播放某一条视频
    async playOneVideo(item,currentIndex){
      // 设置正在播放的索引
      this.playIndex = currentIndex

      const isCanPlay = await this.validatePlayRight()
      if (!isCanPlay) return

      const videoContext = wx.createVideoContext('myVideo')

      this.video_url = item.video_url
      // 播放当前选中的
      setTimeout(() => {
        videoContext.play()
      }, 200)

      // 记录学习进度
      const res = await this.$axios.post('/study/video',{
        course_id: this.course_id,
        video_id:item.id
      })

      if (res.data.status === 0){
        item.is_study = 1
      }
    },
    // 当视频播放的时候
    onVideoPlay(){
      if (!this.isValidateRight){
        this.validatePlayRight()
      }
    },
    // 校验播放权限
    async validatePlayRight(){
        // 检查该用户是否支付了该课程
        const res = await this.$axios.get(`/order/paystatus?course_id=${this.course_id}`)

        if (res.data.pay_status === 0){
          wx.createVideoContext('myVideo').pause()

          wx.showModal({
            title:'提示',
            content: '您还没有支付，请先支付后，再来观看哦~', //提示的内容,
            showCancel: true, //是否显示取消按钮,
            confirmText: '去支付', //确定按钮的文字，默认为取消，最多 4 个字符,
            confirmColor: '#ff8d44', //确定按钮的文字颜色
             success:res => {
              if (res.confirm) {
                wx.navigateTo({ url: `/pages/pay/main?course_id=${this.course_id}&course_title=${this.course_title}&course_price=${this.course_price}` });
              }
            }
          })

          return new Promise((resolve,reject) => {
            resolve(false)
          })
        } else {
          this.isValidateRight = true
          return new Promise((resolve,reject) => {
            resolve(true)
          })
        }
    },
    // 评价
    async evaluate(){
      // 查询是否学习完毕了该课程，如果是则弹出评论对话框，如果不是，则提示
      const res = await this.$axios.get('/study/complete',{
        params:{
          course_id:this.course_id
        }
      })

      if (res.data.complete){ // 学习完毕了
        this.isShowCommentModal = true
      } else {
        wx.showModal({
          title: '评论失败', //提示的标题,
          content: '需要学习完课程内容才能评价哦~', //提示的内容,
          showCancel: false, //是否显示取消按钮,
          confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: '#ff8d44', //确定按钮的文字颜色
        })
      }
    },
    // 关闭模态框
    closeModal(){
      this.isShowCommentModal = false
      this.content = ''
    },
    // 获取选中的评论分数
    getChangeSocre(score){
      this.score = score
    },
    // 提交评论
    async postComment(){
      const res = await this.$axios.post('/comment/create',{
        course_id: this.course_id,
        content: this.content,
        score: this.score
      })

      if (res.data.status === 0){
        this.closeModal()
        wx.showToast({
          title: '评价成功', //提示的内容,
          icon: 'success', //图标,
          duration: 2000, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透
        });
      }
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
        margin-top:16rpx;
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
.comment-content{
  label{
    width:100rpx;
  }
  textarea{
    width: 100%;
    height: 200rpx;
  }
}
</style>
