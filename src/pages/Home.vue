<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>
<script>
import HomeHeader from '../components/home/homeheader'
import HomeSwiper from '../components/home/homeswiper'
export default {
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 750px;
  height: 1334px;
}
</style>
