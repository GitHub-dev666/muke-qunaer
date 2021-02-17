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
    .wrap{
        width: 750px;
        height: 86px;
        font-size: 28px;
        background-color: #00bcd4;
        color: #ffff;
        display: flex;
        align-items: center;
        .iconfont{
            font-size: 28px;
        }
        .left{
            width: 80px;
            height: 86px;
            .middle()
        }
        .mid{
            flex:1;
            height: 62px;
            line-height: 62px;
            color: darkgray;
            background-color: #fff;
            border-radius: 12px;
            margin: 12px 10px;
            vertical-align: center;
            padding-left: 10px;
            .icon-search {
                margin: 0px 10px;
            }
        }
        .right{
            width: 124px;
            height: 86px;
            line-height: 86px;
            .middle()
        }

    }
</style>
