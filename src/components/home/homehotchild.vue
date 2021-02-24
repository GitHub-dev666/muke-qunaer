<template>
    <div class="wrap">
        <div class="wrap-img" v-for="item in List" :key="item.id">
            <img :src='item.imgUrl' alt="图片损坏"/>
            <p class="wrap-script">{{item.script}}</p>
            <p class="wrap-price">{{item.price}}</p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      List: [
        {
          id: 1001,
          name: '鼓浪屿',
          price: '￥ 2185',
          script: '含往返飞机票+5晚住宿',
          imgUrl: '//imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg'
        },
        {
          id: 1002,
          name: '石牛山景区',
          price: '￥ 5560',
          script: '含往返飞机票+4晚住宿',
          imgUrl: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg'
        },
        {
          id: 1003,
          name: '火山岛风景区',
          price: '￥ 3706',
          script: '含往返飞机票+4晚住宿',
          imgUrl: '//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg'
        },
        {
          id: 1004,
          name: '冠豸山',
          price: '￥ 3106',
          script: '含往返飞机票（含税）+4晚住宿',
          imgUrl: '//imgs.qunarzz.com/p/p22/1809/99/d2c37b3777d68102.jpg_256x160_3ffeabed.jpg'
        },
        {
          id: 1005,
          name: '冠豸山',
          price: '￥ 1006',
          script: '驾一叶扁舟，寻瓯江往事',
          imgUrl: '//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg'
        },
        {
          id: 1006,
          name: '冠豸山',
          price: '￥ 3306',
          script: '厦门，带娃出行与幸福同行',
          imgUrl: '//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    .wrap-img {
        width: 47%;
        height: 341px;
        .wrap-script{
            font-size: 28px;
            font-weight: 450;
            line-height: 1.2;
            margin:10px 5px 0px 5px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .wrap-price{
            color: #ff7400;
            font-size: 36px;
            font-weight: 550;
            margin: 0px;
        }
        img {
            width: 100%;
            height: 216px;
            border-radius: 10px;
        }
    }
}

</style>
