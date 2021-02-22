<template>
    <div class="footer">
      <router-link class="foot-link" :to="{name:'HomeHotChild'}">
        <span class="iconfont icon-Icon_Filled_Home"></span>
        <span class="foot-sp">首 页</span>
      </router-link>
      <router-link class="foot-link" :to="{name:'Order'}">
        <span class="iconfont icon-Icon_Filled_jiaoyan"></span>
        <span class="foot-sp">订 单</span>
      </router-link>
      <router-link class="foot-link" :to="{name:'Self'}">
        <span class="iconfont icon-Icon_Filled_Study"></span>
        <span class="foot-sp">我 的</span>
      </router-link>
    </div>
</template>

<style lang="less" scope>
.footer {
  background-color: #fff;
    width: 100%;
    height: 100px;
    border-top: 1px solid #e0e0e0;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .foot-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #616161;
      text-decoration: none;
      &.router-link-active{
        color: rgb(7, 181, 224);
      }
      .iconfont {
        font-size: 40px;
      }
      .foot-sp{
        margin-bottom: 2px;
      }
    }
}
</style>
