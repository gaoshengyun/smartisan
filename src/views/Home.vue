<template>
  <div class="home">
    <top-bar :showLogo="showLogo" :showText="showText"></top-bar>
    <div class="wrap-index-content-body">
      <div class="index-content-body">
        <index-swpier></index-swpier>
      </div>
    </div>
    <hot-products></hot-products>
    <clothing-boxes ></clothing-boxes>
    <!-- 官方配件  -->
    <product-list  :officalPartsList="officalPartsList" :title="offIcalPartsListTitle"></product-list>
    <!-- 畅呼吸 -->
  </div>
</template>

<script>
import TopBar from '../components/TopBar/TopBar'
import IndexSwpier from '../components/IndexSwiper/IndexSwpier'
import HotProducts from '../components/HotProducts/HotProducts'
import ClothingBoxes from '../components/ClothingBoxes/ClothingBoxes'
import ProductList from '../components/ProductList/ProductList'
export default {
  name: 'home',
  data() {
    return {
      showLogo: true,
      showText: '',
      officalPartsList: [],
      offIcalPartsListTitle: '官方配件'
    }
  },
  components: {
    TopBar,
    IndexSwpier,
    HotProducts,
    ClothingBoxes,
    ProductList
  },
  methods: {
    getOfficalParts() {
      this.axios.get('https://www.easy-mock.com/mock/5d5bb45db009ce622b9ded94/api/officalPatrs')
        .then(this.getOfficalPartsSuccess)
        .catch(err => console.log(err))
    },
    getOfficalPartsSuccess(res) {
      if(res.status === 200 && res.data.code === 1) {
        this.officalPartsList = res.data.data
      }
    }
  },
  mounted() {
    this.getOfficalParts()
  },
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
