<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>
<script>
import HomeHeader from '../components/home/homeheader'
import HomeSwiper from '../components/home/homeswiper'
import HomeIcons from '../components/home/homeicons'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 750px;
  height: 1334px;
}
</style>
