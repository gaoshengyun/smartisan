<template>
  <div class="wrap-clothing-boxes">
    <h2>
      <span>服装箱包</span>
      <span> &gt; </span>
    </h2>
    <div class="clothing-boxes-content">
      <ul>
        <li v-for="(item, index) in list" :key="item.id">
          <div class="left"><img :src="item.imgUrl" alt=""></div>
          <div class="right">
            <p class="product-name">{{item.productName}}</p>
            <p class="product-slogan">{{item.productSlogan}}</p>
            <p class="product-price">&yen; {{item.productPrice}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ClothingBoxes',
  data() {
    return {
      list: []
    }
  },
  methods: {
    getClothingBoxes() {
      this.axios.get('https://www.easy-mock.com/mock/5d5bb45db009ce622b9ded94/api/clothingboxes')
        .then(this.getClothingBoxesSuccess)
        .catch(err => console.log(err))
    },
    getClothingBoxesSuccess(res) {
      if(res.status === 200 && res.data.code === 1) {
        this.list = res.data.data
      }
    }
  },
  mounted() {
    this.getClothingBoxes()
  },
}
</script>
<style lang="scss" scoped>
.wrap-clothing-boxes{
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
  .clothing-boxes-content{
    li{
      border-bottom: 1px solid #ebebeb;
      overflow: hidden;
      padding: 12px 0;
      .left{
        float: left;
        width: 33%;
        box-sizing: border-box;
        img{
          width: 100%;
        }
      }
      .right{
        float: left;
        width: 66%;
        box-sizing: border-box;
        vertical-align: middle;
        padding-top: 7%;
        padding-left: 20px;
        p{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .product-name{
          font-size: .6rem;
          color: #333;
          font-weight: bold;
        }
        .product-slogan{
          font-size: .5rem;
          margin: .3rem 0;
          color: #7f7f7f;
        }
        .product-price{
          color: #d44d44;
          font-weight: bold;
        }
      }
    }
  }
}
</style>