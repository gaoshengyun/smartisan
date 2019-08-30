<template>
  <div class="wrap-m-center">
    <top-bar :showLogo="showLogo" :showText="showText"></top-bar>
    <div class="m-center">
      <user-info></user-info>
      <member-center-card :cardContent="card1"></member-center-card>
      <member-center-card :cardContent="card2"></member-center-card>
      <member-center-card :cardContent="card3"></member-center-card>
    </div>
    
  </div>
</template>
<script>
import TopBar from '../components/TopBar/TopBar'
import UserInfo from '../components/MCenter/UserInfo'
import MemberCenterCard from '../components/MCenter/MemberCenterCard'
export default {
  name: 'MCenter',
  data() {
    return {
      showLogo: false,
      showText: '个人中心',
      card1: [
        {
          id: 1,
          menuText: '地址管理',
          url: '/manageadress'
        },
        {
          id: 2,
          menuText: '我的优惠券',
          url: '/coupon'
        },
        {
          id: 3,
          menuText: '优先购买码',
          url: '/ucode'
        },
        {
          id: 4,
          menuText: '提货兑换卡',
          url: '/card'
        }
      ],
      card2: [
        {
          id: 1,
          menuText: '常见问题',
          url: '/faq'
        },
        {
          id: 2,
          menuText: '服务支持',
          url: '/support'
        }
      ],
      card3: [
        {
          id: 1,
          menuText: '意外碎屏保修服务',
          url: '/acidentinsurance'
        },
        {
          id: 2,
          menuText: '延长保修服务',
          url: '/extendedinsurance'
        }
      ]
    }
  },
  components: {
    TopBar,
    UserInfo,
    MemberCenterCard
  }
}
</script>
<style lang="scss" scoped>
.wrap-m-center{
  padding-top: 50px;
  background: #E5E5E5;
  padding-bottom: 50px;
  .m-center{
    padding: 20px;
  }
}
</style>