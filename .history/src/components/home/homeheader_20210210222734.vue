<template>
    <div class="wrap">
        <div class="left">1</div>
        <div class="mid">2</div>
        <div class="right">3</div>
    </div>
</template>
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
        background-color: #0af7ff;
        color: #fff;
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
