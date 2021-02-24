<template>
    <div class="wrap">
        <input class="search" v-model="inputResult" type="text" name="search" :placeholder="def">
        <div class="searchResult" v-show="inputResult.length">
          <ul class="ul-wrap">
            <li class="li-list" v-for="item in this.searchList" :key="item.id" v-text="item.name"></li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: [
    'list'
  ],
  data () {
    return {
      def: '请输入城市名称',
      inputResult: '',
      searchList: []
    }
  },
  watch: {
    inputResult () {
      const result = []
      for (const i in this.list) {
        this.list[i].forEach((obj) => {
          if (obj.spell.indexOf(this.inputResult) > -1 || obj.name.indexOf(this.inputResult) > -1) {
            result.push(obj)
          }
        })
      }
      this.searchList = result
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
    .searchResult {
      width: 100%;
      height: 89vh;
      background-color:#fff;
      position: absolute;
      z-index: 1;
      top: 120px;
      .ul-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .li-list {
          margin: 10px 30px;
          list-style: none;
          width: 180px;
          height: 60px;
          font-size: 34px;
          text-align: center;
          line-height: 60px;
          border-radius: 10px;
          background-color: rgb(141, 213, 247);
        }
      }
    }
}
</style>
