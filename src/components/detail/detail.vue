<template>
    <div class="detail-wrap ">
        <div class="content " v-for="(item, k) in list" :key="k">
            <div class="title-wrap">
                <div class="title" v-text="item.title"></div>
            </div>
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
    .content {
        width: 100%;
        background-color: rgb(219, 223, 224);
        .title-wrap {
            border-top: 1px solid;
            .title {
                height: 60px;
                line-height: 60px;
                margin-left: 20px;
            }
        }
    }
}
.detail-content {
    .content {
        width: 100%;
        background-color: rgb(219, 223, 224);
        .title-wrap {
            border-top: 1px solid;
            .title {
                height: 60px;
                line-height: 60px;
                margin-left: 60px;
            }
        }
    }
}
</style>
