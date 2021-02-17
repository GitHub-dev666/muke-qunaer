<template>
<div>
    <h1 class='heard-h1'>特惠度假</h1>
    <div class="header">
        <router-link class="link" :to="{name:'HomeHotChild'}">当季热门度假</router-link>
        <router-link class="link" :to="{name:'HomeHotChild2'}">今日特惠度假</router-link>
    </div>
    <router-view></router-view>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.heard-h1 {
    font-size: 38px;
    line-height: 26.4px;
    margin: 50px 0px 18px 18px ;
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    .link {
        width: 200px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        text-decoration: none;
        font-size: 26px;
        font-family: "PingFangSC-Regular" !important;
        color: #666;
        border: 1px solid #d7d7d7;
        border-radius: 12px;
        background-color: #fff;
        margin:12px 12px;
        &.router-link-active{
        background-color: #17c0c8;
        color:#fff;
    }
    }
}
</style>
