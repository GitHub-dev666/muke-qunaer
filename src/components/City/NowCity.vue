<template>
    <div class="now-wrap">
        <div class="title" @click="sh">当前城市</div>
        <div class="content" v-show="show">
          <div v-text="city"></div>
        </div>
    </div>
</template>
<script>
export default {
  props: [
    'city'
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
.now-wrap {
  font-size: 28px;
    .title {
        width: 100%;
        height: 50px;
        background-color: rgb(216, 213, 213);
        box-sizing: border-box;
        padding: 3px 20px;
    }
    .content {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: start;
        align-items: center;
        div {
          width: 120px;
          height: 60px;
          background-color: rgba(201, 182, 182, 0.822);
          text-align: center;
          line-height: 60px;
          border-radius: 8px;
          margin-left: 20px;
        }
    }
}
</style>
