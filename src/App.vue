<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style lang="less">
.app {
  width: 750px;
  height: 1334px;
  .footer {
    width: 100%;
    height: 150px;
    background-color: rgb(255, 127, 187);
  }
}
</style>
