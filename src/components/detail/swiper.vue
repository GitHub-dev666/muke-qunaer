<template>
    <div class="wraper">
      <!--轮播图-->
      <div @click="SH">
        <swiper  class="swiper-wrap" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="content"  v-for="item in imgList" :key="item.id">
            <img :src="item.imgUrl" alt="图片损坏">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!--图片介绍-->
      <div class="scripts">
        <span>产品编号</span>
        <span>132456586</span>
      </div>
      <!--图片点击放大轮播图-->
      <div class='pro-swiper' v-show="title" @click="SH">
        <swiper  class="swiper-wrap" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="content"  v-for="item in imgList" :key="item.id">
            <img :src="item.imgUrl" alt="图片损坏">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!--顶部栏-->
      <div class="detail-head" :style="sty">
        <p>{{detailData.sightName}}</p>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      sty: {
        opacity: 0
      },
      title: false,
      imgList: [
        {
          id: '10001',
          imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/1aa78884-6522-4b0a-98f2-8f70ad57ccad.jpg_r_640x420x95_016e3d40.jpg'
        },
        {
          id: '1002',
          imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/665370fa-7ff7-4592-a4cf-7b8ed185acf0.jpg_r_640x420x95_2ecf70cd.jpg'
        },
        {
          id: '1003',
          imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/d48202a4-8fff-4723-a097-8ae9dabcb894.jpg_r_640x420x95_814048dd.jpg'
        }
      ],
      swiperOptions: {
        loop: true,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.scrollListener)
  },
  deactivated () {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    SH () {
      this.title = !this.title
    },
    scrollListener () {
      const top = document.documentElement.scrollTop / 200
      if (top > 0 && top < 1) {
        this.sty.opacity = top
      } else if (top >= 1) {
        this.sty.opacity = 1
      } else {
        this.sty.opacity = 0
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    ...mapState(['detailData'])
  }
}
</script>
<style lang="less" scoped>
.wraper /deep/ .swiper-pagination {
  width: 75px;
  left: 85%;
  bottom: 20px;
  font-size: 25px;
  color: #fff;
}
.wraper {
  .detail-head {
    width: 100%;
    height: 90px;
    background-color:rgb(128, 230, 230);
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 30px;
    }
  }
  .swiper-wrap {
    .content {
      height: 0px;
      padding-bottom: 65%;
      img {
        width: 100%;
      }
    }
  }
  .pro-swiper{
    width: 100%;
    height: 93.5vh;
    background-color: black;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .swiper-wrap {
      padding-bottom: 100px;
      .swiper-pagination {
      color: #fff;
      font-size: 38px;
      left: 0;
      bottom: 0;
      width: 100%;
      }
    }
  }
  .scripts {
    width: 100%;
    height: 60px;
    color: #fff;
    font-size: 25px;
    position: absolute;
    left: 0px;
    top: 430px;
    z-index: 1;
    background-image: linear-gradient(rgba(0,0,0,0) 10px, rgba(0,0,0,0.3) 60px);
    span{
      margin-left: 20px;
    }
  }
}
</style>
