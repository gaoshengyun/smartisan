<template>
  <div class="wrap-mobile-parts">
    <h2>{{productInfo.title}}</h2>
    <div class="img-content">
      <img :src="productInfo.bannerImg" alt="">
    </div>
    <div class="mobile-parts-list">
      <div 
        class="product-content"
        v-for="(item, index) in productInfo.list" :key="item.id"
      >
        <div class="product-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <p>{{item.productName}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MobileParts',
  props: {
    productInfo: Object
  }
}
</script>
<style lang="scss" scoped>
.wrap-mobile-parts{
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
  .mobile-parts-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 12px;
    box-sizing: border-box;
    padding: .9rem .6rem;
    .product-content{
      width: 30%; 
      height: 100%;   
      .product-img{
        border: 1px solid #F0F0F0;
        width: 100%;
        margin: 0 auto;
        img{
          width: 70%;
          display: block;
          margin: 0 auto;
        }
      }
      p{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-weight: bold;
        font-size: .6rem;
        line-height: 2;
      }
    }
  }
}
</style>