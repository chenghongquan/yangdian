<template>
  <div>
    <ul>
      <li class="classify-list">
        <div class="img-box">
          <img src="../assets/imgs/03.png" alt />
        </div>
        <span>奶 粉</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.classify-list {
  width: 3.07rem; /* 230/75 */
  height: 3.2rem; /* 240/75 */
  float: left;
  background-color: #1d84a7;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: center;
  color: #fff;
}

.img-box {
  width: 97%;
  height: 2.53rem; /* 190/75 */
  margin: 2px 2px 5px 2px;
  background: #fff;
  border-radius: 5px 5px 0 0;
  text-align: center;
  padding-top: 10px;

  img {
    width: 2.27rem; /* 170/75 */
    height: 2.27rem; /* 170/75 */
  }
}
</style>