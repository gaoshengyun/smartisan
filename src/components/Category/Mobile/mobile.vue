<template>
  <div class="mobile-wrap">
    <h2>手机</h2>
    <div class="img-content">
      <img src="https://resource.smartisan.com/resource/b1d887c9246cee3a8ba7a7a7c57d5a50.png" alt="">
    </div>
    <ul class="mobile-list">
      <router-link tag="li" 
        v-for="(item, index) in list" :key="item.id"
        :to="baseProductUrl+item.productId"
      >
        <div class="left">
          <img :src="item.imgUrl" alt="">
          {{item.productName}}
        </div>
        <div class="right">&gt;</div>
      </router-link >
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CategoryMobile',
  data() {
    return {
      list: [],
      baseProductUrl: '/product/'
    }
  },
  methods: {
    getCategoryMobile() {
      this.axios.get('https://www.easy-mock.com/mock/5d5bb45db009ce622b9ded94/api/catoryMobile')
        .then(this.getCategoryMobileSuccess)
        .catch(err => console.log(err))
    },
    getCategoryMobileSuccess(res) {
      if(res.status ===200 && res.data.code ===1) {
        this.list = res.data.data
      }
    }
  },
  mounted() {
    this.getCategoryMobile()
  },
}
</script>
<style lang="scss" scoped>
.mobile-wrap{
  background: #fff;
  margin-bottom: 6px;
  h2{
    line-height: 40px;
    border: 1px solid #EBEBEB;
    padding: 0 12px;
    color: #666;
    font-size: 0.75em;
  }
  .img-content{
    padding: .7rem .8rem;
    border-radius: .3rem;
    overflow: hidden;
    border: none;
    img{
      width: 100%;
      box-shadow: -7px 5px 30px #ccc;
    }
  }
  .mobile-list{
    li{
      height: 3rem;
      border-top: 1px solid #EBEBEB;
      display: flex;
      justify-content: space-between;
      padding: 0 12px;  
      .left{
        line-height: 3rem;
        font-size: .6rem;
        font-weight: bold;
        color: rgba(0,0,0,.8);
        img{
          height: 2rem;
          vertical-align: middle;
        }
      }
      .right{
        line-height: 3rem;
        font-weight: bold;
        color: #666;
      }
    }
  }
}
</style>