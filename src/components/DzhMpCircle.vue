<template>
  <div class="mp-circle-container">
    <canvas class="mp-circle" :style="{width:width+'px',height:height+'px'}" :canvas-id="'backgroundCanvas'+canvasId"></canvas>
    <canvas class="mp-circle" :style="{width:width+'px',height:height+'px'}"  :canvas-id="'foregroundCanvas'+canvasId"></canvas>
  </div>
</template>

<script>
export default {
  props:{
    canvasId:{
      type:Number
    },
    width:{
      type:Number,
      default:100
    },
    height:{
      type:Number,
      default:100
    },
    backgroundColor:{
      type:String,
      default:'#f3f3f3'
    },
    foregroundColor:{
      type:String,
      default: '#B4D66E'
    },
    lineWidth:{
      type:Number,
      default:5
    },
    progress:{
      type:Number,
      default:100
    }
  },
  updated() {
    this.drawProgress()
  },
  onReady(){
    this.drawProgress()
  },
  methods:{
    // 绘制进度
    drawProgress(){
      if (this.progress <= 30){
        this.foregroundColor = '#ff0000'
      } else if (this.progress > 30 && this.progress < 50){
        this.foregroundColor = '#FF783B'
      } else {
        this.foregroundColor = '#B4D66E'
      }

      // 背景色
      const backgroundCtx = wx.createCanvasContext('backgroundCanvas'+this.canvasId)
      // 前景色
      const foregroundCtx = wx.createCanvasContext('foregroundCanvas'+this.canvasId)

      // 绘制背景色
      backgroundCtx.setStrokeStyle(this.backgroundColor)
      backgroundCtx.setLineWidth(this.lineWidth)
      // 绘制圆
      backgroundCtx.arc(this.width/2 + this.lineWidth / 2, this.height/2 + this.lineWidth / 2, this.width/2 - this.lineWidth, 0, 2 * Math.PI, true)
      backgroundCtx.stroke()

      // 绘制前景色
      foregroundCtx.setStrokeStyle(this.foregroundColor)
      foregroundCtx.setLineWidth(this.lineWidth)
      foregroundCtx.setLineCap('round')
      foregroundCtx.arc(this.width/2 + this.lineWidth / 2, this.height/2 + this.lineWidth / 2, this.width/2 - this.lineWidth, -0.5 * Math.PI, (this.progress / 100) * 2 * Math.PI -0.5 * Math.PI, false)
      foregroundCtx.stroke()

      // 绘制文字
      foregroundCtx.setFillStyle(this.foregroundColor)
      foregroundCtx.setFontSize(12)
      if (this.progress >= 99){
        foregroundCtx.fillText(parseInt(this.progress)+'%',this.width / 2 - 13,this.height / 2 + 6)
      } else {
        foregroundCtx.fillText(parseInt(this.progress)+'%',this.width / 2 - 10,this.height / 2 + 6)
      }

      // 绘制
      backgroundCtx.draw()
      foregroundCtx.draw()
    }
  }
}
</script>

<style scoped>
.mp-circle-container{
  position: relative;
}
.mp-circle{
 position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}
</style>

