<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
          <div class="title" @click="sh">城市列表</div>
          <div class="content" v-show="show">
            <div class="citys" v-for='(value,key) in list' :key="key">
                <div class="citytitle" :ref="key" v-text="key" @click="hh"></div>
                <div class="cityvalue" v-for="item in value" :key="item.id" v-text="item.name" v-show="yyy"></div>
            </div>
          </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  props: [
    'list'
  ],
  data () {
    return {
      show: 'true',
      yyy: 'false',
      letter: ''
    }
  },
  methods: {
    sh () {
      this.show = !this.show
    },
    hh () {
      this.yyy = !this.yyy
    },
    todo (res) {
      if (res) {
        this.letter = res
      }
    }
  },
  mounted () {
    this.$globalEventBus.$on('mess', this.todo)
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
        console.log(element)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  font-size: 28px;
  line-height: 60px;
    .title {
        width: 100%;
        height: 60px;
        background-color: rgb(216, 213, 213);
        box-sizing: border-box;
        padding: 3px 20px;
    }
    .content {
      width: 100%;
      .citys {
        background-color: darkgray;
        .citytitle {
          height: 60px;
          box-sizing: border-box;
          padding-left: 30px;
          border-bottom: 1px solid;
          border-color: lavender;
          background-color: rgb(147, 202, 199);
        }
        .cityvalue {
          height: 60px;
          box-sizing: border-box;
          padding-left: 30px;
          background-color: rgb(237, 238, 233);
          border-bottom: 1px solid;
          border-color: rgb(184, 184, 192);
        }
      }
    }
}
</style>
