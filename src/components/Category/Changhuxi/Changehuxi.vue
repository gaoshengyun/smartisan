<template>
  <div class="changhuxi-wrap">
    <h2>{{list.title}}123123</h2>
    <div class="img-content">
      <img :src="list.bannerImg" alt="">
    </div>
    <div class="changhuxi-list">
      <div 
        class="changhuxi-item"
        v-for="(item, index) in list.list" :key="item.id"
      >
        <div class="product-img"><img :src="item.imgUrl" alt=""></div>
        <div class="product-name">{{item.productName}}</div>
        <div class="more">&gt;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 name: 'Changhuxi',
 data() {
  return {
    list: {}
  }
 },
 methods: {
    getCategoryChanghuxi() {
      this.axios.get('https://www.easy-mock.com/mock/5d5bb45db009ce622b9ded94/api/categorychanghuxi')
      .then(this.getCategoryChanghuxiSuccess)
      .catch(err => console.log(err))
    },
    getCategoryChanghuxiSuccess(res) {
      if(res.status === 200 && res.data.code === 1) {
        this.list = res.data.data
      }
    }
 },
 mounted() {
   this.getCategoryChanghuxi()
 },
}
</script>
<style lang="scss" scoped>
.changhuxi-wrap{
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
  .changhuxi-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .changhuxi-item{
      width: 49.9%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .product-img{
        flex-grow: 0;
        width: 30%;
        img{
          width: 100%;
        }
      }
      .product-name{
        flex-grow: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .6rem;
        font-weight: bold;
        padding: 0 10px;
      }
      .more{
        flex-grow: 0;
        width: 20%;
      }
    }
  }
}
</style>