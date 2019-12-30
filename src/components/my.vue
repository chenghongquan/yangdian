<template>
  <div>
    <van-nav-bar title="个人中心">
      <van-icon name="setting-o" slot="left" size="20" color="#fff" />
      <van-icon name="comment-o" slot="right" size="23" color="#fff" />
    </van-nav-bar>
    <div class="bgc-box"></div>
    <!-- 登录区域 -->
    <router-link to="/login">
      <div class="login-box" @click="out">
        <div class="login-btn">
          <div class="headpic-bgc">
            <div class="headpic">
              <img :src="header" alt />
            </div>
          </div>
          <span class="gologin" v-if="flag">点击登录</span>
          <span class="user" v-if="!flag">{{user}}</span>
        </div>
        <p class="collect">
          <van-icon name="like-o" size="18" color="#ff9900" />我的收藏
        </p>
      </div>
    </router-link>
    <div class="myorder">
      <span class="left">我的订单</span>
      <span class="right">查看全部订单</span>
    </div>
    <div class="orderbtn">
      <div class="btn">
        <van-icon name="pending-payment" size="30" />
        <span>待付款</span>
      </div>
      <div class="btn">
        <van-icon name="send-gift-o" size="30" />
        <span>待发货</span>
      </div>
      <div class="btn">
        <van-icon name="logistics" size="30" />
        <span>待收货</span>
      </div>
      <div class="btn">
        <van-icon name="edit" size="30" />
        <span>待评价</span>
      </div>
      <div class="btn">
        <van-icon name="after-sale" size="30" />
        <span>退款/售后</span>
      </div>
    </div>
    <div class="address">
      <h3>收货地址管理</h3>
    </div>
    <footernav></footernav>
  </div>
</template>
<script>
import { Dialog } from "vant";
import footernav from "./public/footernav";
export default {
  data() {
    return {
      user: "",
      header: "",
      flag: true
    };
  },
  mounted() {
    this.user = sessionStorage.getItem("user");
    this.header = sessionStorage.getItem("header");
    if (this.user) {
      this.flag = false;
    }
  },
  components: {
    footernav
  },
  methods: {
    out() {
      if (sessionStorage.getItem("user")) {
        Dialog.confirm({
          message: "确定离开吗？"
        })
          .then(() => {
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("header");
          })
          .catch(() => {
            this.$router.go(-1);
          });
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
* {
  box-sizing: border-box;
}

.van-nav-bar {
  background-color: #ff9900;
  border: none;
}

.bgc-box {
  width: 100%;
  height: 3.2rem; /* 240/75 */
  background-color: #ff9900;
}

.login-box {
  width: 100%;
  height: 3.53rem; /* 265/75 */
  background-color: #fafafa;
  position: relative;
}

.login-btn {
  width: 2.85rem; /* 214/75 */
  height: 3.68rem; /* 276/75 */
  margin: 0 -1.43rem; /* 107/75 */
  // background red
  position: absolute;
  left: 50%;
  top: -1.87rem; /* 140/75 */
  text-align: center;
}

.headpic-bgc {
  width: 2.85rem; /* 214/75 */
  height: 2.85rem; /* 214/75 */
  border-radius: 50%;
  background: #fff;
  position: relative;
}

.headpic {
  width: 2.6rem; /* 210/75 */
  height: 2.6rem; /* 210/75 */
  border-radius: 50%;
  background: #ccc;
  overflow: hidden;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    width: 2.67rem; /* 200/75 */
    height: 2.67rem; /* 200/75 */
  }
}

.gologin {
  display: inline-block;
  margin-top: 10px;
  font-size: 0.4rem; /* 30/75 */
}

.collect {
  position: absolute;
  bottom: 0;
  margin: 0 0 0.67rem 0.67rem; /* 50/75 */
  font-size: 0.4rem; /* 30/75 */
}

.myorder {
  width: 100%;
  height: 1.68rem; /* 126/75 */
  margin-top: 10px;
  background: #fff;
  line-height: 1.68rem; /* 126/75 */
  font-size: 0.4rem; /* 30/75 */
  padding: 0 0.53rem; /* 40/75 */

  .right {
    float: right;
    color: #999;
  }
}

// 订单按键列表
.orderbtn {
  width: 100%;
  height: 2.45rem; /* 184/75 */
  margin-top: 2px;
  background: #fff;
  display: flex;

  .btn {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      margin-top: 10px;
    }
  }
}

.address {
  margin-top: 5px;
  height: 1.65rem; /* 124/75 */
  width: 100%;
  background: #fafafa;
  padding-left: 0.53rem; /* 40/75 */
  line-height: 1.65rem; /* 124/75 */
  font-size: 0.4rem; /* 30/75 */
  color: #999;
}
</style>