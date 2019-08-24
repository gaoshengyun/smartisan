<template>
  <div class="home">
    <top-bar :showLogo="showLogo" :showText="showText"></top-bar>
    <div class="wrap-index-content-body">
      <div class="index-content-body">
        <index-swpier></index-swpier>
      </div>
    </div>
    <hot-products></hot-products>
    <clothing-boxes></clothing-boxes>
    <offical-parts></offical-parts>
  </div>
</template>

<script>
import TopBar from '../components/TopBar/TopBar'
import IndexSwpier from '../components/IndexSwiper/IndexSwpier'
import HotProducts from '../components/HotProducts/HotProducts'
import ClothingBoxes from '../components/ClothingBoxes/ClothingBoxes'
import OfficalParts from '../components/OfficalParts/OfficalParts'
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
    HotProducts,
    ClothingBoxes,
    OfficalParts
  }
}
</script>

<style lang="scss" scoped>
.home{
  background: #E5E5E5;
}
.wrap-index-content-body{
  background: #ffffff;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 6px;
  box-shadow: 0 5px 13px rgba(0,0,0,.1);
  overflow-y: auto;
  overflow-x: hidden;
  .index-content-body{
    background: #e4e4e4;
  }
}
</style>
