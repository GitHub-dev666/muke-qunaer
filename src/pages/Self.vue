<template>
    <div class="wrap">
        <div class="header">
            <p class="iconfont icon-jiantou"></p>
            <div class="long">
                <img class="long-img" src="https://source.qunarzz.com/usercenter/touch/avatar.png" alt="头像">
                <p class="long-p">登录/注册</p>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../components/footer'
export default {
  components: {
    Footer
  }
}
</script>
<style lang="less" scoped>
.header {
    color: #fff;
    width: 100%;
    height: 320px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -920px;
    background-image: url('https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg');
    .long {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .long-img {
            width: 130px;
        }
        .long-p {
            margin: 10px;
        }
    }
}
.icon-jiantou {
    font-size: 34px;
    margin: 0px;
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: start;
    align-items:center;
}
.wrap {
    background-color: rgb(237, 239, 242);
}
</style>
