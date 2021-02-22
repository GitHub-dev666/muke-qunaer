<template>
    <div class="hot-wrap">
        <div class="title" @click="sh">热门城市</div>
        <div class="content" v-show="show">
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
        font-size: 28px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: rgb(216, 213, 213);
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
          height: 70px;
          font-size: 28px;
          background-color: rgb(124, 194, 216);
          box-sizing: border-box;
          border-radius: 10px;
          text-align: center;
          line-height: 70px;
        }
      }
    }
}
</style>
