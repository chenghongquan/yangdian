
<template>
  <!--  公共底部导航 -->
  <div>
    <van-tabbar v-model="active" active-color="#ff9900" inactive-color="#000" route>
      <van-tabbar-item icon="wap-home-o" push to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" push to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" push to="/shoppingcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" push to="/my">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
  }
};
</script>
<style lang="">
</style>