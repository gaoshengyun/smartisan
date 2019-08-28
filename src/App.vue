<template>
  <div id="app">
    <router-view/>
    <foot></foot>
  </div>
</template>
<script>
import Foot from './components/Footer/Footer'
export default {
  components: {
    Foot
  }
}
</script>
<style lang="scss">

</style>
