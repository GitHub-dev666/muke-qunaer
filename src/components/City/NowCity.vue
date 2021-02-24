<template>
    <div class="now-wrap">
        <div class="title">当前城市</div>
        <div class="content">
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
        background-color: #ECECEC;
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
          background-color: #ECECEC;
          text-align: center;
          line-height: 60px;
          border-radius: 8px;
          margin-left: 20px;
        }
    }
}
</style>
