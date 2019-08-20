<template>
  <div class="home">
    <top-bar :showLogo="showLogo" :showText="showText"></top-bar>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'

export default {
  name: 'home',
  data() {
    return {
      showLogo: true,
      showText: ''
    }
  },
  components: {
    TopBar
  }
}
</script>
