<template>
    <div class="wrap">
        <div class="left">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou"></use>
            </svg>
        </div>
        <div class="mid">123123
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-search"></use>
            </svg>
        </div>
        <div class="right">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantouarrow486"></use>
            </svg>
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
