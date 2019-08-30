<template>
  <div class="wrap-member-center-card">
    <ul>
      <router-link 
        tag="li" 
        v-for="(item, index) in cardContent" :key="item.id"
        :to="item.url"
      >
        <span>{{item.menuText}}</span>
        <span>&gt;</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MenbeCenterCard',
  props: {
    cardContent: Array
  }
}
</script>
<style lang="scss" scoped>
.wrap-member-center-card{
   background: #fff;
    overflow: hidden;
    border-radius: .4rem;
    margin-bottom: .7rem;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03);        
    ul{
      li{
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        line-height: 3rem;
        border-bottom: 1px solid #f2f2f2;
        padding: 0 15px;
      }
    }
}
</style>