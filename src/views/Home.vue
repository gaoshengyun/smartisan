<template>
  <div class="home">
    <top-bar :showLogo="showLogo" :showText="showText"></top-bar>
    <div class="wrap-index-content-body">
      <div class="index-content-body">
        <index-swpier></index-swpier>
      </div>
    </div>
    <hot-products></hot-products>
  </div>
</template>

<script>
import TopBar from '../components/TopBar/TopBar'
import IndexSwpier from '../components/IndexSwiper/IndexSwpier'
import HotProducts from '../components/HotProducts/HotProducts'
export default {
  name: 'home',
  data() {
    return {
      showLogo: true,
      showText: ''
    }
  },
  components: {
    TopBar,
    IndexSwpier,
    HotProducts
  }
}
</script>

<style lang="scss" scoped>
.wrap-index-content-body{
  background: #ffffff;
  height: 100%;
  margin-top: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  .index-content-body{
    background: #e4e4e4;

  }
}
</style>
