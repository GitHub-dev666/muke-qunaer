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
    .wrap{
        width: 750px;
        height: 86px;
        background-color:bisque;
        display: flex;
        align-items: center;
        .left{
            width: 64px;
            height: 86px;
            background-color: darkkhaki;
        }
        .mid{
            flex:1;
            height: 86px;
            background-color: darkseagreen;
        }
        .right{
            width: 124px;
            height: 86px;
            background-color: darksalmon;
        }

    }
</style>
