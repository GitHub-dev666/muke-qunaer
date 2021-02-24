<template>
    <div class="wrap">
      <ul class="ulwrap" ref="A">
          <li class="list"
          @click="sendMsg"
          v-for="(item,key) in list"
          :key="key"
          v-text="key"
          @touchstart="touchstart"
          @touchmove="touchmove"
          @touchend="touchend"
          ></li>
      </ul>
    </div>
</template>
<script>
export default {
  props: [
    'list'
  ],
  data () {
    return {
      touchStatus: false
    }
  },
  computed: {
    letter () {
      const letter = []
      for (const key in this.list) {
        letter.push(key)
      }
      return letter
    }
  },
  methods: {
    sendMsg (e) {
      this.$globalEventBus.$emit('msg', e.target.innerText)
    },
    touchstart () {
      this.touchStatus = true
    },
    touchmove (e) {
      const listTopY = this.$refs.A.offsetTop
      const touchY = e.touches[0].clientY
      const index = Math.floor((touchY - listTopY) / 19)
      if (index >= 0 && index < this.letter.length) {
        this.$globalEventBus.$emit('msg', this.letter[index])
        console.log(this.letter[index])
      }
    },
    touchend () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="less" scoped>
.wrap {
    .ulwrap {
        font-size: 32px;
        position: absolute;
        top: 180px;
        right: 0px;
        .list {
          width: 38px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          list-style: none;
          color:#11C6CD;
        }
    }
}
</style>
