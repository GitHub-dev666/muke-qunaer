<template>
  <div class="app">
    <div class="content">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/footer'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="less" scoped>
.app {
  width: 750px;
  height: 1344px;
  .content{
    width: 100%;
    height: 1244px;
    overflow:scroll;
  }
}
</style>
