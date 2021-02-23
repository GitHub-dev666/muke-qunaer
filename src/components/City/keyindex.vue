<template>
    <div class="wrap">
        <ul class="ulwrap">
            <li class="lilist" @click="handle" v-for="(item,key) in list" :key="key" v-text="key"></li>
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
    }
  },
  methods: {
    handle (e) {
      this.$globalEventBus.$emit('mess', e.target.innerText)
    }
  }
}
</script>
<style lang="less" scoped>
.wrap {
    .ulwrap {
        font-size: 32px;
        font-weight: bold;
        color: rgb(36, 149, 241);
        list-style: none;
        position: absolute;
        right: 2px;
        top: 100px;
    }
}
</style>
