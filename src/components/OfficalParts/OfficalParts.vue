<template>
  <div class="wrap-offical-parts">
    <h2>
      <span>官方配件</span>
      <span> &gt; </span>
    </h2>
    <div class="offical-parts-content">
      <div class="offical-parts-item" v-for="(item, index) in list" :key="item.id">
        <span v-if="item.promotion" class="promotion">{{item.promotion}}</span>
        <img :src="item.imgUrl" alt="">
        <p class="product-name">{{item.productName}}</p>
        <p class="product-slogan">{{item.productSlogan}}</p>
        <div>
          <span class="sale-price">&yen; {{item.salePrice}}</span>
          <span class="market-price">&yen; {{item.marketPrice}}</span>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'OfficalParts',
  data() {
    return {
      list: []
    }
  },
  methods: {
    getOfficalParts() {
      this.axios.get('https://www.easy-mock.com/mock/5d5bb45db009ce622b9ded94/api/officalPatrs')
        .then(this.getOfficalPartsSuccess)
        .catch(err => console.log(err))
    },
    getOfficalPartsSuccess(res) {
      if(res.status === 200 && res.data.code === 1) {
        this.list = res.data.data
      }
    }
  },
  mounted() {
    this.getOfficalParts()
  },
}
</script>
<style lang="scss" scoped>
  .wrap-offical-parts{
    margin-bottom: 6px;
    background: #fff;
    padding: 0 10px;
    h2{
      line-height: 40px;
      color: #666;
      font-size: .75rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #EBEBEB;
      box-sizing: border-box;
    }
    .offical-parts-content{
      padding: 15px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .offical-parts-item{
        width: 46%;
        position: relative;
        margin-bottom: 15px;
        .promotion{
          position: absolute;
          color: #DEB441;
          background: #FEFBE7;
          border: 1px solid #ffe57a;
          padding: 0 16px;
          font-size: 0.4rem;
          transform:scale(0.7);
          left: 0;
          top: 0;
          border-radius: 25%;
        }
        img{
          width: 100%;
          border: 1px solid #F6F6F6;
        }
        p{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .product-name{
          font-size: .7rem;
          color: #333;
          font-weight: bold;
        }
        .product-slogan{
          font-size: .5rem;
          color: #7f7f7f;
        }
        div{
          .sale-price{
            color: #d44d44;
            font-weight: bold;
            font-size: .6rem;
          }
          .market-price{
            color: #7f7f7f;
            font-size: .5rem;
            padding-left: 13px;
            text-decoration: line-through
          }
        }
      }
    }
  }
</style>