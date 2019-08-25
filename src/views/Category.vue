<template>
  <div class="category-wrap">
    <top-bar :showLogo="showLogo" :showText="showText"></top-bar>
    <mobile></mobile>
  </div>
</template>
<script>
import TopBar from '../components/TopBar/TopBar'
import Mobile from '../components/Category/Mobile/mobile'
export default {
  name: 'category',
  data() {
    return {
      showLogo: false,
      showText: '分类',
    }
  },
  components: {
    TopBar,
    Mobile
  }
}
</script>
<style lang="scss" scoped>
.category-wrap{
  padding-top: 50px;
  background: #E4E4E4;
}
</style>