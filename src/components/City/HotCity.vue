<template>
    <div class="hot-wrap">
        <div class="title">热门城市</div>
        <div class="content">
          <div class="citys">
            <div class="city" v-for="item in list" :key="item.id">{{item.name}}</div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  props: [
    'list'
  ],
  data () {
    return {
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
        font-size: 28px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color:#ECECEC;
        box-sizing: border-box;
        padding: 3px 20px;
    }
    .content {
      width: 100%;
      height: 160px;
      .citys {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
        .city {
          width: 28%;
          height: 60px;
          font-size: 28px;
          background-color: #ECECEC;
          box-sizing: border-box;
          border-radius: 10px;
          text-align: center;
          line-height: 60px;
        }
      }
    }
}
</style>
