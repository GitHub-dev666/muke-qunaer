<template>
  <div class="wrap">
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

<style lang="less" scope>
.wrap {
  width: 750px;
  height: 1344px;
  overflow: hidden;
  .content{
    width: 100%;
    height: 1244px;
    overflow:scroll;
  }
}
</style>
