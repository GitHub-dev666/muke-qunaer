<template>
    <div class="icons">
        <div class='icon' v-for='item in iconList' :key='item.id'>
            <img class="icon-img" :src="item.imgUrl" :alt='item.name'>
            <p class="icon-p">{{item.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      iconList: [
        {
          id: 1001,
          name: '酒店',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png'
        },
        {
          id: 1002,
          name: '机票',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png'
        },
        {
          id: 1003,
          name: '火车票',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png'
        },
        {
          id: 1004,
          name: '度假',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png'
        },
        {
          id: 1005,
          name: '景点门票',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png'
        },
        {
          id: 1006,
          name: '海外酒店',
          imgUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png'
        },
        {
          id: 1007,
          name: '自由行',
          imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png'
        },
        {
          id: 1008,
          name: '汽车票',
          imgUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.icons{
    overflow: hidden;
    width: 100%;
    height: 375px;
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;

    .icon {
        width: 25%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .icon-img{
          display: block;
          width: 55%;
        }
        .icon-p {
          margin: 0px;
          font-family: PingFangSC-Regula;
        }
    }
}
</style>
