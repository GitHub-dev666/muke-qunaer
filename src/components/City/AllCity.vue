<template>
  <div class="wrap">
    <div class="title">城市列表</div>
    <div class="wraper" ref="wrap">
      <div class="content">
        <div class="citys" v-for='(value,key) in list' :key="key">
          <div class="citytitle" v-text="key" :ref="key"></div>
          <div class="cityvalue" v-for="item in value" :key="item.id" v-text="item.name"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: [
    'list'
  ],
  data () {
    return {
    }
  },
  methods: {
    todo (res) {
      if (res) {
        const element = this.$refs[res][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.$globalEventBus.$on('msg', this.todo)
  },
  updated () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrap, {
        click: true
      }
      )
    }
    )
  }
}
</script>
<style lang="less" scoped>
.wrap{
  .title {
    font-size: 30px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color:#ECECEC;
    box-sizing: border-box;
    padding: 0px 20px;
  }
  .wraper {
    height: 62vh;
    overflow: hidden;
      .content {
        .citys {
          .citytitle {
            font-size: 28px;
            height: 60px;
            line-height: 60px;
            box-sizing: border-box;
            padding-left: 30px;
            border-bottom: 1px solid;
            border-color: lavender;
            background-color: rgb(182, 218, 230);
          }
          .cityvalue {
            font-size: 28px;
            height: 60px;
            line-height: 60px;
            box-sizing: border-box;
            padding-left: 15px;
            background-color: rgb(255, 255, 255);
            border-bottom: 1px solid;
            border-color: rgb(237, 237, 238);
          }
        }
      }
  }
}
</style>
