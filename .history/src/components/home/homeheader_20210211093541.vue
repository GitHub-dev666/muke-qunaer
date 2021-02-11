<template>
    <div class="wrap">
        <div class="left"></div>
        <div class="mid">2</div>
        <div class="right">3</div>
    </div>
</template>
<script src="../../src/iconfont.js"></script>
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
