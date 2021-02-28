<template>
    <div>
        <div class="wrap">
            <Swiper/>
            <Detail :list='detailList'/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../components/footer'
import Swiper from '../components/detail/swiper'
import Detail from '../components/detail/detail'
import { mapState } from 'vuex'
export default {
  components: {
    Footer,
    Swiper,
    Detail
  },
  activated () {
    this.$store.dispatch('detailInfo')
  },
  computed: {
    ...mapState(['detailList'])
  }
}
</script>
<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 150vh;
}
</style>
