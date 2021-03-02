<template>
  <div class="wrap">
    <div class="content">
      <home-header></home-header>
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
      swiperList: [],
      lastCity: ''
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
      const data = res.data.data
      this.swiperList = data.swiperList
    }
  },
  mounted () {
    this.lastCity = this.$store.state.city
    this.getInfo()
  },
  activated () {
    if (this.lastCity !== this.$store.state.city) {
      this.lastCity = this.$store.state.city
      this.getInfo()
    }
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
