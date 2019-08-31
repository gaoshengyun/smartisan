<template>
  <div class="wrap-top-bar">
    <div class="top-bar">
      <div class="menu iconfont">&#xe609;</div>
      <div class="menu center">
        <router-link tag="span" to="/" v-if="showLogo" class="logo"></router-link>
        <span v-else="showLogo" class="page-title"> {{showText}} </span>
      </div>
      <div class="menu iconfont">&#xe604;</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
  props: {
    showLogo: Boolean,
    showText: String
  },
}
</script>
<style lang="scss" scoped>
.wrap-top-bar{
  width: 100%;
  height: 50px;
  background: #1d1d1d;
  color: #fff;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  .top-bar{
    display: flex;
    height: 50px;
    justify-content: space-between;
    .menu{
      height: 50px;
      width: 60px;
      text-align: center;
      line-height: 50px;
      .logo{
        display: block;
        height: 50px;
        background: url('../../assets/images/logo.png') no-repeat -1px -23px;
        background-size: cover;
      }
    }
    .center{
      width: 100px;
    }
    .iconfont{
      font-size: 28px;
    }
  }
}
</style>