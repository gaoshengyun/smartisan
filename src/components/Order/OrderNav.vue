<template>
  <div class="order-nav-wrap">
    <ul>
      <router-link 
        v-for="(item, index) in navList" :key="item.id"
        tag="li"
        :class="{'current' : currentId === item.id}"
        :to="item.url"
        @click.native="tab(item.id)"
      >
        {{item.navText}}
      </router-link>
    </ul>

    
  </div>
</template>
<script>
export default {
  name: 'OrderVue',
  data() {
    return {
      currentId: 1,
      navList: [
        {
          id: 1,
          navText: '全部',
          url: '/order/all'
        },
        {
          id: 2,
          navText: '待付款',
          url: '/order/unpay'
        },
        {
          id: 3,
          navText: '待收货',
          url: '/order/undone'
        },
        {
          id: 4,
          navText: '已完成',
          url: '/order/finish'
        }
      ]
    }
  },
  methods: {
    tab(id) {
      this.currentId = id
    }
  },
}
</script>
<style lang="scss" scoped>
.order-nav-wrap{
  box-shadow: 0 0.2rem 1rem rgba(0,0,0,.1);
  background: #fff;
  padding: .45rem .3rem;
  ul{
    display: flex;
    border: 1px solid #D5D5D5;
    border-radius: .15rem;
    li{
      width: 24.9%;
      border-right: 1px solid #d5d5d5;
      text-align: center;
      font-size: 1rem;
      padding: .5rem 0;
      color: #606060;
      font-size: .7rem;
    }
    .current{
      background: #bfbfbf;
      color: #fff;
      box-shadow: inset 1 1px 3px grba(0,0,0,.15);
      font-weight: bold;
    }
    li:nth-of-type(4){
      border-right: none;
    }
  }
}
</style>