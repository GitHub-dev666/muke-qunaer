<template>
    <div>
        <div class="wrap">
            <Swiper/>
            <Detail/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../components/footer'
import Swiper from '../components/detail/swiper'
import Detail from '../components/detail/detail'
export default {
  components: {
    Footer,
    Swiper,
    Detail
  }
}
</script>
<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 93.5vh;
}
</style>
