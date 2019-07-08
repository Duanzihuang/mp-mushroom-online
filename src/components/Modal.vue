<template>
  <div catchtouchmove @click="closeModal" class="modal-mask" v-show="visible">
    <div catchtap :style="{'top':top+'rpx'}" class="modal-content">
      <div class="modal-title" v-if="title">{{ title }}</div>
      <div class="modal-body"><slot></slot></div>
      <div @click="postComment" class="modal-action">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: false
    },
    top:{
      type:Number,
      default:350
    }
  },
  methods:{
    closeModal(){
      this.$emit('close')
    },
    postComment(){
      this.$emit('postComment')
    }
  }
}
</script>

<style lang="less" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  transition: all 0.2s ease-in-out;
}
.modal-content{
  margin: 300rpx auto 0;
  width:600rpx;
  border-radius:7px;
  padding:15px 15px 10px 15px;
  // position:relative;
  background-color:#fff;
  border:1px solid #e0e0e0;
  background-clip:padding-box;
  overflow:hidden
}
.modal-title {
  padding: 6px 15px 15px;
  margin: 0;
  font-size: 18px;
  line-height: 1;
  color: #1c2438;
  text-align: center;
}
.modal-body{
  margin-bottom:50rpx;
  font-size:14px;
  color:#80848f;
  height:100%;
  line-height:1.5;
  overflow:auto
}
.modal-action{
  border-top: 1px solid #e0e0e0;
  margin-top:30rpx;
  padding-top:10rpx;
  height: 80rpx;
  line-height: 80rpx;
  color:#ff994d;
  font-size: 16px;
  text-align: center;
}
</style>

