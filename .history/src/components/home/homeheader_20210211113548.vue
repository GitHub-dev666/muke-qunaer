<template>
    <div class="wrap">
        <div class="left">
           <span class="iconfont icon-jiantou"></span>
        </div>
        <div class="mid">
           <span class="iconfont icon-search"></span>
           <span>请输入城市</span>
        </div>
        <div class="right">
           <span>城市</span>
           <span class="iconfont icon-jiantouarrow486"></span>
        </div>
    </div>
</template>
<script src="../../assets/iconfont/iconfont.js"></script>
<script>
export default {}
</script>
<style lang="less" scoped>
    .middle(){
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .wrap{
        width: 750px;
        height: 86px;
        background-color: #00bcd4;
        color: #ffff;
        display: flex;
        align-items: center;
        .left{
            width: 64px;
            height: 86px;
            background-color: darkkhaki;
            .middle()
        }
        .mid{
            flex:1;
            height: 62px;
            line-height: 62px;
            background-color: darkseagreen;
            border-radius: 5px;
            margin: 12px 10px;
            vertical-align: center;
            padding-left: 10px;
        }
        .right{
            width: 124px;
            height: 86px;
            line-height: 86px;
            vertical-align: center;
            background-color: darksalmon;
            .middle()
        }

    }
</style>
