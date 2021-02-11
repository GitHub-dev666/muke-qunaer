<template>
    <div>
        <swiper
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper>
    </div>
</template>
<script>
</script>
<style lang="less" scoped>

</style>
