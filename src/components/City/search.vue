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
    height: 50px;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-content: center;
    .search {
        font-size: 25px;
        text-align: center;
        width: 100%;
        border-radius: 10px;
        border-style: none;
        margin: 2px 10px;
        box-sizing: border-box;
        padding: 0px 8px;
    }
}
</style>
