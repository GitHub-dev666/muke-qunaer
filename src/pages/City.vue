<template>
    <div class="wraper">
        <Header />
        <Search />
        <now-city :city='nowCity'></now-city>
        <hot-city :list='hotcity'></hot-city>
        <all-city :list='allcity'></all-city>
        <key-index :list='allcity'></key-index>
        <Footer />
    </div>
</template>
<script>
import Header from '../components/City/header'
import Search from '../components/City/search'
import NowCity from '../components/City/NowCity'
import HotCity from '../components/City/HotCity'
import AllCity from '../components/City/AllCity'
import keyIndex from '../components/City/keyindex'
import Footer from '../components/footer'
import axios from 'axios'

export default {
  data () {
    return {
      nowCity: '',
      hotcity: [],
      allcity: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.detil)
    },
    detil (req) {
      const data = req.data.data
      console.log(data)
      this.nowCity = data.city
      this.hotcity = data.hotCities
      this.allcity = data.cities
    }
  },
  mounted () {
    this.getCityInfo()
  },
  components: {
    Header,
    Search,
    NowCity,
    HotCity,
    AllCity,
    keyIndex,
    Footer
  }
}
</script>
<style lang="less" scoped>
.wraper {
  height: 93.5vh;
  overflow: hidden;
}
</style>
