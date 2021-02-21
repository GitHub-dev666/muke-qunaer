<template>
    <div class="hot-wrap">
        <div class="title" @click="sh">热门城市</div>
        <div class="content" v-show="show">
          <div class="line">
            <div class="citys">1</div>
            <div class="citys">2</div>
            <div class="citys">3</div>
          </div>
          <div class="line">
            <div class="citys">4</div>
            <div class="citys">5</div>
            <div class="citys">6</div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      show: 'true'
    }
  },
  methods: {
    sh () {
      this.show = !this.show
    }
  }
}
</script>
<style lang="less" scoped>
.hot-wrap {
    .title {
        width: 100%;
        height: 50px;
        background-color: rgb(216, 213, 213);
        box-sizing: border-box;
        padding: 3px 20px;
    }
    .content {
      width: 100%;
      .line{
        width: 100%;
        height: 80px;
        background-color: goldenrod;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-content: space-around;
        .citys {
          width: 20%;
          height: 65px;
          border-radius: 10px;
          text-align: center;
          line-height: 65px;
          background-color: lightblue;
        }
      }
    }
}
</style>
