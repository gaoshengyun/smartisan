<template>
  <div class="wrap-hot-products">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item, index) in hotProductsList" :key="item.id"
      >
        <div class="wrap-product">
          <img :src="item.imgUrl" alt="">
          <p class="prodoctName"> {{item.productName}} </p>
          <p class="productSlogan"> {{item.slogan}} </p>
          <div class="price">
            <span class="salePrice">&yen; {{item.salePrice}}</span>
            <span class="marketPrice">&yen; {{item.marketPrice}}</span>
          </div>
        </div>
      </swiper-slide>    
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HotProducts',
  data() {
    return {
      swiperOption: {
        slidesPerView: 3
      },
      hotProductsList: []
    }
  },
  methods: {
    getHotProductsList() {
      this.axios.get('https://www.easy-mock.com/mock/5d5bb45db009ce622b9ded94/api/hotproducts')
        .then(this.getHotProductsListSuccess)
        .catch(err => console.log())
    },
    getHotProductsListSuccess(res) {
      if(res.status === 200 && res.data.code === 1) {
        this.hotProductsList = res.data.data
      }
      console.log(res)
    }
  },
  mounted() {
    this.getHotProductsList()
  },
}
</script>
<style lang="scss" scoped>
.wrap-hot-products{
  padding: 0 10px;
  .wrap-product{
    img{
      width: 100%;
    }
    .prodoctName, .productSlogan{
      font-size: .6rem;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
      margin-bottom: 4px;
    }
    .productSlogan{
      font-size: .5rem;
      color: #7f7f7f;
      line-height: 1.2;
      margin-bottom: 0;
    }
    .price{
      text-align: left;
      .salePrice{
        font-size: 0.6rem;
        color: #d44d44;
        white-space: nowrap;
        font-weight: bold;
      }
      .marketPrice{
        color: #7f7f7f;
        font-size: .5rem;
        text-decoration: line-through;
        padding-left: 5px;
      }
    }
  }
}
</style>