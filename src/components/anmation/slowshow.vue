<template>
    <transition name="fade">
        <slot></slot>
    </transition>
</template>
<style lang="less" scoped>
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
    transition: all 0.8s;
}
</style>
