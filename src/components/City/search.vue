<template>
    <div class="wrap">
        <input class="search" type="text" name="search" :placeholder="def">
    </div>
</template>
<script>
export default {
  data () {
    return {
      def: '请输入城市名称'
    }
  }
}
</script>
<style lang="less" scoped>
.wrap {
    width: 100%;
    height: 70px;
    background-color:#11C6CD;
    display: flex;
    justify-content: center;
    align-items: center;
    .search {
        font-size: 25px;
        text-align: center;
        width: 98%;
        height: 80%;
        border-radius: 10px;
        border-style: none;
        box-sizing: border-box;
        padding: 0px 8px;
    }
}
</style>
