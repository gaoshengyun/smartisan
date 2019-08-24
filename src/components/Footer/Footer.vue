<template>
  <div class="footer">
    <div 
      v-for="(item, index) in bottomMenuData" :key="item.id"
      @click="handleBottomMenuClick(item.id)"
      :class="{'current-nav': bottomMenuId === item.id}" 
    >
      <span class="iconfont nav-home" v-html="item.navIcon"></span>
      <span class="nav-text" v-html="">{{item.navText}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Foot',
  data() {
    return {
      bottomMenuId: 1,
      bottomMenuData: [
        {
          id: 1,
          navIcon: '&#xe613;',
          navText: '首页'
        },
        {
          id: 2,
          navIcon: '&#xe60a;',
          navText: '分类'
        },
        {
          id: 3,
          navIcon: '&#xe656;',
          navText: '购物车'
        },
        {
          id: 4,
          navIcon: '&#xe641;',
          navText: '个人中心'
        }
      ]
    }
  },
  methods: {
    handleBottomMenuClick(itemID){
      this.bottomMenuId = itemID
    }
  },
}
</script>
<style lang="scss" scoped>
.footer{
  position: fixed;
  height: 50px;
  background: #FFFFFF;
  color: #000;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  div{
    text-align: center;
    height: 50px;
    width: 24.9%;
    display: flex;
    flex-direction: column;
    .iconfont{
      font-size: 28px;
      color: #D8D8D8;
      font-weight: 500;
    }
    .nav-text{
      font-size: .5rem;
      transform: scale(.8)
    }
  }
  .current-nav{
    .iconfont{
      color: #646464;
    }
  }
}
</style>