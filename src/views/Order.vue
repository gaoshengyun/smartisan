<template>  
  <div class="order-wrap">
    <top-bar :showLogo="showLogo" :showText="showText"></top-bar>
    <order-nav></order-nav>
    <router-view class="order-view"></router-view>
  </div>
</template>
<script>
import TopBar from '../components/TopBar/TopBar'
import OrderNav from '../components/Order/OrderNav'
export default {
  name: 'order',
  data() {
    return {
      showLogo: false,
      showText: '我的订单',
    }
  },
  components: {
    TopBar,
    OrderNav
  }
}
</script>
<style lang="scss" scoped>
.order-wrap{
  padding-top: 50px;
  background: #E5E5E5;
  padding-bottom: 50px;
  height: 100%;
  .order-view{
    height: 100%;
  }
}
</style>