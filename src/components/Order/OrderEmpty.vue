<template>
  <div class="order-empty-wrap">
    <div class="order-info">
      <div class="img iconfont">
        &#xe656;
      </div>
      <div class="text1">
        暂无购物商品
      </div>
      <div class="text2">
        添加到购物车的商品将会显示在这里
      </div>
      <div class="go-to-buy-button">
        <router-link tag="div" to="/">现在购物</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OrderEmpty'
}
</script>
<style lang="scss" scoped>
.order-empty-wrap{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .order-info{
    text-align: center;
    width: 1000%;
    .img{
      width: 100%;
      font-size: 150px;
      color: #DDDDDD;
      text-align: center;
    }
    .text1{
      color:rgba(0,0,0,.15);
      font-size: 1.2rem;
      font-weight: bold;
      width: 100%;
      text-align: center;
      padding: 10px 0;
    }
    .text2{
      color:rgba(0,0,0,.15);
      text-align: center;
      font-size: .8rem;
      margin-bottom: 20px;
    }
    .go-to-buy-button{
      width: 100%;
      div{
        width: 142px;
        line-height: 40px;
        border: 1px solid #D8D8D8;
        text-align: center;
        margin: 0 auto;
        font-size: .6rem;
        color: rgba(0,0,0,.6);
        border-radius: .24rem;
      }
    }
  }
    
}
</style> 