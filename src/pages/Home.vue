<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-hot></home-hot>
  </div>
</template>
<script>
import HomeHeader from '../components/home/homeheader'
import HomeSwiper from '../components/home/homeswiper'
import HomeIcons from '../components/home/homeicons'
import HomeHot from '../components/home/homehot'
import axios from 'axios'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeHot
  },
  methods: {
    getInfo () {
      axios.get('/api/test.json')
        .then(this.detilInfo)
    },
    detilInfo (res) {
      console.log(res.data)
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 750px;
  height: 1334px;
}
</style>
