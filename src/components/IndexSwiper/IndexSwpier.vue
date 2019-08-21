<template>
  <div class="wrap-swiper">
     <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"></img>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'IndexSwpier',
  data() {
    return {
      swiperList: [],
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 2500,
      }
    }
  },
  methods: {
    getIndexSwiperInfo() {
      this.axios.get('https://www.easy-mock.com/mock/5d5bb45db009ce622b9ded94/api/indexswiper')
        .then(this.getIndexSwiperInfoSuccess)
        .catch(err => console.log(err))
    },
    getIndexSwiperInfoSuccess(res) {
      if(res.status === 200 && res.data.code === 1){
        this.swiperList = res.data.data
      }
      
    }
  },
  mounted() {
    this.getIndexSwiperInfo()
  },
}
</script>
<style lang="scss" scoped>
.wrap-swiper{
  background: #ffffff;
  .swiper-img{
    width: 100%;
  }
}
</style>