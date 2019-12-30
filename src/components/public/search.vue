<template>
  <div>
    <div class="search-box">
      <div class="in-box">
        <input type="text" class="in" placeholder="请输入商品" />
        <div class="icon-box"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus"scoped>
/* 搜索框盒子 */
.search-box {
  width: 100%;
  height: 0.85rem;
  text-align: center;
}
.in-box {
  width: 6.93rem; /* 520/75 */
  height: 0.85rem; /* 64/75 */
  margin: 0 auto;
  background: rgba(255,255,181,0.3);
  border-radius: 5px;
  padding: 0 0.29rem; /* 22/75 */
}

.icon-box {
  width: 0.73rem; /* 55/75 */
  height: 0.88rem; /* 66/75 */
  float: right;
  background-image: url("../../assets/imgs/icon/search.png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 0 4px;
}
.in {
  width: 5.33rem; /* 400/75 */
  height: 100%;
  background-color:transparent;
  font-size: 16px;
}
</style>