<template>
  <div class="fff">
    <van-nav-bar
      title="登录"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="contain">
      <div class="login-box">
        <div class="in-box">
          <span>手机号 :</span>
          <input type="number" v-model="phone" />
        </div>
        <div class="in-box">
          <span>密 &nbsp; 码 :</span>
          <input type="password" v-model="password" />
        </div>
        <p>忘记密码</p>
        <van-button type="primary" size="normal" @click="login">登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/zhuce");
    },
    login() {
      this.$axios({
        url: "/api/login/cellphone",
        data: {
          phone: this.phone,
          password: this.password
        },
        method: "post"
      })
        .then(res => {
          if (res.data.code == 200) {
            Dialog({ message: "登录成功" }).then(() => {
              this.$router.push("/my");
            });
            // sessionStorage保存用户名
            sessionStorage.setItem("user", res.data.profile.nickname);
            sessionStorage.setItem("header", res.data.profile.avatarUrl);
          } else {
            Dialog({ message: "账号或密码错误" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
* {
  box-sizing: border-box;
}

.fff {
  background: #fff;
}

.van-nav-bar {
  background-color: #ff9900;

  .van-icon {
    color: #fff;
  }
}

.van-nav-bar__text {
  color: #fff;
}

.van-nav-bar__title {
  color: #fff;
}

.contain {
  width: 100%;
}

.login-box {
  width: 8.03rem; /* 602/75 */
  height: 6rem; /* 450/75 */
  margin: 2.67rem auto;

  p {
    margin: 10px 0;
  }
}

.in-box {
  width: 100%;
  height: 1.77rem; /* 133/75 */
  line-height: 1.77rem; /* 133/75 */
  // background-color #fff
  border-bottom: 1px solid #ccc;

  span {
    font-size: 0.4rem; /* 30/75 */
  }

  input {
    background-color: #fff;
    height: 90%;
    font-size: 0.4rem; /* 30/75 */
    margin-left: 10px;
  }
}

.van-button--primary {
  width: 8.03rem; /* 602/75 */
  background-color: #ff9900;
  border: 1px solid #ff9900;
}
</style>