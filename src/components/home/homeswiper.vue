<template>
  <swiper class="wrap" ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img class="img" src="//imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="img" src="//imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="img" src="//imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="img" src="//imgs.qunarzz.com/vs_ceph_vcimg/6ff121fd416169b8d56c60384e3baf79.jpeg">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  data () {
    return {
      swiperOptions: {
        loop: true,
        pagination: '.swiper-pagination',
        effect: 'coverflow'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.wrap {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 40%;
}
.img{
  width: 100%;
}
.swiper-container{
  --swiper-pagination-color: #00ff33;/* 两种都可以 */
}
</style>
