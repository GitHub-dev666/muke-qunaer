<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></homeswiper>
  </div>
</template>
<script>
import HomeHeader from '../components/home/homeheader'
import HomeSwiper from '../components/home/homeswiper'
import Homeswiper from '../components/home/homeswiper.vue'
export default {
  components: {
    HomeHeader,
    HomeSwiper
    Homeswiper
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 750px;
  height: 1334px;
  background-color: darkgrey;
}
</style>
