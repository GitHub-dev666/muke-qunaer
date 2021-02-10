<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>
<script>
import HomeHeader from '../components/home/homeheader'
export default {
  components: {
    HomeHeader
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 1000px;
  background-color: darkgrey;
}
</style>
