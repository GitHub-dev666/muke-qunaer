<template>
    <div class="now-wrap">
        <div class="title" @click="sh">当前城市</div>
        <div class="content" v-show="show">{{city}}</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      show: 'true',
      city: '福建'
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
        background-color: goldenrod;
    }
}
</style>
