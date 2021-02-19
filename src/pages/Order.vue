<template>
    <div class="wrap">
        <div class='header'>
            <p class="iconfont icon-jiantou"></p>
            <p>全部订单</p>
            <p class="header-p3">手机查单</p>
        </div>
        <div class='content'>
            <div class="content-head">
                <p>全部</p>
                <p>待出行</p>
                <p>待支付</p>
                <p>已完成</p>
            </div>
            <div class="content-mid">
                <img src="https://s.qunarzz.com/q_design_font/images/empty.png" alt="图片损坏">
                <p>您还没有本地订单呦</p>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.flex(){
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.wrap {
   background-color: rgb(237, 239, 242);
   .header  {
       display: flex;
       justify-content: start;
       align-items: center;
       .icon-jiantou {
           margin-left:30px;
           margin-right: 245px;
       }
       .header-p3 {
           margin-left: 140px;
       }
   }
   .content {
      .content-head {
        .flex()
      }
      .content-mid {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        img {
            width: 100%;
        }
      }
    }
   }
</style>
