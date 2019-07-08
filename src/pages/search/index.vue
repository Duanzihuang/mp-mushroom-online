<template>
  <div class="search-container">
    <div class="search-head">
      <input focus class="search-input" v-model="keyword" placeholder="请输入课程名称" type="text" @confirm="getCoursesData" @focus="isFocus=true"/>
      <span class="iconfont icon-search"></span>
      <span v-show="isFocus" @click="cancel" class="search-button">取消</span>
    </div>
    <div class="search-body">
      <navigator :url="'/pages/course-detail/main?id='+item.id" class="course-item" v-for="item in courses" :key="item.id">
        <img :src="item.icon" alt="">
        <p class="title">{{item.title}}</p>
        <p class="subtitle">{{item.subtitle}}</p>
        <p class="level" v-if="item.level === 1">初级</p>
        <p class="level" v-else-if="item.level === 2">中级</p>
        <p class="level" v-else-if="item.level === 3">高级</p>
      </navigator>
      <div class="empty" v-if="courses.length === 0">
        <p>暂无内容哦~</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isFocus:true,
      keyword:'',
      courses:[]
    }
  },
  onLoad(){
    this.getCoursesData()
  },
  methods:{
    cancel(){
      this.keyword = ''
      this.isFocus = false

      this.getCoursesData()
    },
    async getCoursesData(){
      const res = await this.$axios.get('course/search',{
        params:{
          name:this.keyword
        }
      })

      this.courses = res.data.message
    }
  }
}
</script>

<style lang="less" scoped>
  .search-container{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .search-head{
    padding: 30rpx 0;
    background-color: #ffffff;
    display: flex;
  }
  .search-input{
    margin-left: 30rpx;
    margin-right: 30rpx;
    padding-left: 55rpx;
    width:100%;
    height:74rpx;
    background:rgba(243,243,243,1);
    opacity:1;
    border-radius:8px;
    font-size: 14px;
    flex:1;
  }
  .icon-search{
    position: absolute;
    left:40rpx;
    top:48rpx;
    width: 56rpx;
    height: 56rpx;
    color:#A8A8A8;
  }
  .search-button{
    margin-right: 30rpx;
    width:100rpx;
    height:74rpx;
    line-height: 74rpx;
    text-align: center;
    color: #FF951C;
  }
  .search-body{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 32rpx;
    height: 100%;
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
  .empty{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100%;
    p{
      font-size: 14px;
      color:gray;
    }
  }
</style>
