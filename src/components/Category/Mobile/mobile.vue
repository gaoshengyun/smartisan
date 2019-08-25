<template>
  <div class="mobile-wrap">
    <h2>手机</h2>
    <div class="img-content">
      <img src="https://resource.smartisan.com/resource/b1d887c9246cee3a8ba7a7a7c57d5a50.png" alt="">
    </div>
    <ul class="mobile-list">
      <li>
        <div class="left">
          <img src="https://resource.smartisan.com/resource/25cc6e783a664fbdf83c3c34774a9826.png" alt="">
          坚果 Pro 2S
        </div>
        <div class="right">&gt;</div>
      </li>
      <li>
        <div class="left">
          <img src="https://resource.smartisan.com/resource/25cc6e783a664fbdf83c3c34774a9826.png" alt="">
          坚果 Pro 2S
        </div>
        <div class="right">&gt;</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.mobile-wrap{
  background: #fff;
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
    img{
      width: 100%;
      box-shadow: -7px 5px 10px #ccc;
      border: none;
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