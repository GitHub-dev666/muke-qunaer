<template>
    <div>
        <swiper :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOptions: {
        autoplay: 3000,
        loop: true
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
