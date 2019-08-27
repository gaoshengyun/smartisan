<template>
  <div class="category-wrap">
    <top-bar :showLogo="showLogo" :showText="showText"></top-bar>
    <mobile></mobile>
    <!-- 手机配件 -->
    <mobile-parts :productInfo="mobilePartsInfo"></mobile-parts>
    <!-- 鞋服 -->
    <mobile-parts :productInfo="shoesClothingInfo"></mobile-parts>
  </div>
</template>
<script>
import TopBar from '../components/TopBar/TopBar'
import Mobile from '../components/Category/Mobile/mobile'
import MobileParts from '../components/Category/MobileParts/MobileParts'
export default {
  name: 'category',
  data() {
    return {
      showLogo: false,
      showText: '分类',
      mobilePartsInfo: {},
      shoesClothingInfo: {}
    }
  },
  components: {
    TopBar,
    Mobile,
    MobileParts
  },
  methods: {
     getCategoryMobilePatrs() {
      this.axios.get('https://www.easy-mock.com/mock/5d5bb45db009ce622b9ded94/api/cateorymobileparts')
        .then(this.getCategoryMobilePatrsSuccess)
        .catch(err => console.log(err))
    },
    getCategoryMobilePatrsSuccess(res) {
      if(res.status === 200 && res.data.code === 1) {
        this.mobilePartsInfo = res.data.data
      }
    },
    getCategoryShoesClothing() {
      this.axios.get('https://www.easy-mock.com/mock/5d5bb45db009ce622b9ded94/api/categoryshoesclothing')
        .then(this.getCategoryShoesClothingSuccess)
        .catch(err => console.log(err))

    },
    getCategoryShoesClothingSuccess(res) {
      if(res.status === 200 && res.data.code === 1) {
        this.shoesClothingInfo = res.data.data
      }
      
    }
  },
  mounted() {
    this.getCategoryMobilePatrs()
    this.getCategoryShoesClothing()
  },
}
</script>
<style lang="scss" scoped>
.category-wrap{
  padding-top: 50px;
  background: #E4E4E4;
}
</style>