<template>
    <div class="detail-wrap">
        <div class="content" v-for="(item, k) in list" :key="k">
            <div class="detail-title" v-text="item.title"></div>
            <div v-if="item.children" class="detail-content">
                <detail-content :list='item.children'></detail-content>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DetailContent',
  props: ['list'],
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.detail-wrap {
    height: 1560px;
    .content {
        width: 100%;
        height: 180px;
        border-top: 1px solid rgb(241, 238, 238);
        background-color: rgb(126, 189, 218);
        .detail-content{
            width: 100%;
            height: 50px;
            background-color: bisque;
        }
    }

}

</style>
