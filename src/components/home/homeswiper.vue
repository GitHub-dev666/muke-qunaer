<template>
  <div class="swipers">
      <div v-swiper:mySwiper="swiperOptions">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="banner.id" v-for="banner in list">
          <img class="swiper-img" :src="banner.imgUrl">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          id: 10001,
          imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg'
        },
        {
          id: 1002,
          imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg'
        },
        {
          id: 1003,
          imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg'
        },
        {
          id: 1004,
          imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/6ff121fd416169b8d56c60384e3baf79.jpeg'
        }
      ],
      swiperOptions: {
        loop: true,
        effect: 'slide',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.swipers {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
}
.swiper-img{
  width: 100%;
}
.swiper-container{
  --swiper-pagination-color: #ffff;
}
</style>
