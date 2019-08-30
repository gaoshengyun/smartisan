<template>
  <div class="user-info">
    <div class="user">
      <div class="user-avatar">
        <img src="../../assets/images/user-avatar.png" alt="">
      </div>
      <div class="user-name">
        gaoshengyun@github.com
      </div>
      <div class="more">&gt;</div>
    </div>
    <div class="user-order-nav-wrap">
      <div class="user-order-nav">
        <span class="iconfont">&#xe626;</span>
        <span class="nav-text">全部订单</span>
      </div>
      <div class="user-order-nav">
        <span class="iconfont">&#xe605;</span>
        <span class="nav-text">待付款</span>
      </div>
      <div class="user-order-nav">
        <span class="iconfont">&#xe60b;</span>
        <span class="nav-text">待发货</span>
      </div>
      <div class="user-order-nav">
        <span class="iconfont">&#xe600;</span>
        <span class="nav-text">售后</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo'
}
</script>
<style lang="scss" scoped>
  .user-info{
    background: #fff;
    overflow: hidden;
    border-radius: .4rem;
    margin-bottom: .7rem;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03);
    padding: 15px;    
    .user{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #F2F2F2;
      .user-avatar{
        width: 20%;
        padding: 0 10px;
        flex-grow: 0;
        img{
          width: 100%;
          border-radius: 50%;
        }
      }
      .user-name{
        flex-grow: 1;
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .more{
        width: 10%;
        flex-grow: 0;
      }
    }
    .user-order-nav-wrap{
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      .user-order-nav{
        width: 24.9%;
        display: flex;
        flex-direction: column;
        text-align: center;
        .iconfont{
          font-size: 20px;
        }
        .nav-text{
          font-size: .8rem;
        }
      }
    }
  }
</style>