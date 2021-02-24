<template>
  <div class="wrap">
    <div class="content">
      <home-header :city="city"></home-header>
      <home-swiper :list='swiperList'></home-swiper>
      <home-icons></home-icons>
      <home-hot></home-hot>
    </div>
    <Footer/>
  </div>
</template>
<script>
import HomeHeader from '../components/home/homeheader'
import HomeSwiper from '../components/home/homeswiper'
import HomeIcons from '../components/home/homeicons'
import HomeHot from '../components/home/homehot'
import Footer from '../components/footer'
import axios from 'axios'

export default {
  data () {
    return {
      city: '',
      swiperList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeHot,
    Footer
  },
  methods: {
    getInfo () {
      axios.get('/api/test.json')
        .then(this.detilInfo)
    },
    detilInfo (res) {
      console.log(res.data)
      const data = res.data.data
      this.city = data.city
      this.swiperList = data.swiperList
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>
<style lang="less" scoped>
.wrap{
  .content{
    width: 100vw;
    height: 93.5vh;
    overflow: scroll;
  }
}
</style>
