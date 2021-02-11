<template>
    <div class="wrap">
        <div class="left">
            <span class="iconfont icon-icon-jiantou"></span>
        </div>
        <div class="mid">
            <span class="iconfont icon-xxx"></span>
        </div>
        <div class="right">
            <span class="icon-jiantouarrow486"></span>
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
        width: 5em;
        height: 5em;
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
        }
        .right{
            width: 124px;
            height: 86px;
            background-color: darksalmon;
            .middle()
        }

    }
</style>
