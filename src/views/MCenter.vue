<template>
  <div class="wrap-m-center">
    <top-bar></top-bar>
    <div class="m-center">
      <user-info></user-info>
    </div>
    
  </div>
</template>
<script>
import TopBar from '../components/TopBar/TopBar'
import UserInfo from '../components/MCenter/UserInfo'
export default {
  name: 'MCenter',
  components: {
    TopBar,
    UserInfo
  }
}
</script>
<style lang="scss" scoped>
.wrap-m-center{
  padding-top: 50px;
  background: #E5E5E5;
  padding-bottom: 50px;
  .m-center{
    padding: 20px;
  }
}
</style>