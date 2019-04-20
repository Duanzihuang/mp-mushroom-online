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
      swipers: []
    }
  },
  onLoad() {
    this.getSwipersData()
  },
  methods: {
    // 获取轮播图数据
    async getSwipersData() {
      const res = await this.$axios.get('home/swipers')

      this.swipers = res.data.message
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 20rpx;
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
</style>

