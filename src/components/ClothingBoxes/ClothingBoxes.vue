<template>
  <div class="wrap-clothing-boxes">
    <h2>
      <span>服装箱包</span>
      <span> &gt; </span>
    </h2>
  </div>
</template>
<script>
export default {
  name: 'ClothingBoxes'
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
}
</style>