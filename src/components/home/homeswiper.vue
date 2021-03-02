<template>
  <div class="swipers">
      <div v-swiper:mySwiper="swiperOptions" v-if='this.list.length'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="item.id" v-for="item in list">
          <img class="swiper-img" :src="item.imgUrl">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        effect: 'slide',
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
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
  padding-bottom: 32%;
  .my-bullet {
    color: blue;
  }
}
.swiper-img{
  width: 100%;
  height: 240px;
}
.swiper-container{
  --swiper-pagination-color: #ffff;
}
</style>
