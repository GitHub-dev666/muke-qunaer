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
          price: '￥ 2585',
          script: '云南全景🔥大理丽江西双版纳8日',
          imgUrl: '//imgs.qunarzz.com/vs_ceph_b2c_001/12f9ee1a-2d94-44ed-9301-aeb668800662.gif'
        },
        {
          id: 1002,
          name: '石牛山景区',
          price: '￥ 3560',
          script: '泉州-张家界 6天跟团游',
          imgUrl: '//imgs.qunarzz.com/p/tts4/1809/3a/0e53d6dfcba8ca02.jpg_r_480x320x95_900d539b.jpg'
        },
        {
          id: 1003,
          name: '火山岛风景区',
          price: '￥ 5106',
          script: '泉州-南靖云水谣土楼群 7天跟团游',
          imgUrl: '//imgs.qunarzz.com/p/tts4/1608/37/7638bcd52ed9502.jpg_r_480x320x95_1a24ccf5.jpg'
        },
        {
          id: 1004,
          name: '冠豸山',
          price: '￥ 1190',
          script: '长沙韶山+张家界森林公园+玻璃桥+天门山+凤凰6日',
          imgUrl: '//imgs.qunarzz.com/p/tts7/1606/ac/7069afb127874f9a.jpg_r_480x320x95_96e926ad.jpg'
        },
        {
          id: 1005,
          name: '冠豸山',
          price: '￥ 1590',
          script: '琴之岛，乐之屿',
          imgUrl: '//img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_256x160_1175658b.jpg'
        },
        {
          id: 1006,
          name: '冠豸山',
          price: '￥ 9500',
          script: '滨海火山地貌',
          imgUrl: '//img1.qunarzz.com/sight/p0/1810/7a/7aa0954b4ee9c932a3.img.jpg_256x160_8e6cd761.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.wrap {
    width: 100%;
    height: 668px;
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
