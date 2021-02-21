<template>
    <div class="wrap">
        <Header/>
        <Search/>
        <now-city></now-city>
        <hot-city></hot-city>
    </div>
</template>
<script>
import Header from '../components/City/header'
import Search from '../components/City/search'
import NowCity from '../components/City/NowCity'
import HotCity from '../components/City/HotCity'
export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    Search,
    NowCity,
    HotCity
  }
}
</script>
<style lang="less" scoped>
</style>
