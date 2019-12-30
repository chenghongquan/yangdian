<template>
  <div class="fff">
    <van-nav-bar
      title="注册"
      right-text="登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="contain">
      <div class="login-box">
        <div class="in-box">
          <span>昵称 :</span>
          <input type="text" placeholder="请输入昵称" v-model="nickname" />
        </div>
        <div class="in-box">
          <span>手机 :</span>
          <input type="number" placeholder="请输入手机号" v-model="phone" />
        </div>
        <div class="in-box">
          <span>密 &nbsp; 码 :</span>
          <input type="text" placeholder="8-18位字母数字及特殊符号" v-model="password" />
        </div>
        <div class="in-box">
          <span>验证码 :</span>
          <input type="text" placeholder="请输入验证码" v-model="captcha" class="ynm" />
          <span class="yz-btn" @click="yzm" v-show="flag">{{con}}</span>
          <span class="yz-btn" v-show="!flag">{{num}}秒后重新发送</span>
        </div>
        <!-- <p>忘记密码</p> -->
        <van-button type="primary" size="normal" @click="zhuce">注册</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nickname: "",
      phone: "",
      password: "",
      captcha: "",
      flag: true,
      num: 60,
      con: "点击获取"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/login");
    },
    zhuce() {
      this.$axios({
        url: "/api/register/cellphone",
        method: "post",
        data: {
          nickname: this.nickname,
          phone: this.phone,
          passwordne: this.password,
          captcha: this.captcha
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    yzm() {
      this.$axios({
        url: "/api/captcha/sent",
        method: "post",
        data: {
          phone: this.phone
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.flag = false;
            let timer = setInterval(() => {
              this.num--;
              if (this.num <= 0) {
                this.flag = true;
                clearInterval(timer);
              }
            }, 1000);
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
    font-size: 0.37rem; /* 30/75 */
    margin-left: 10px;
  }

  .yz-btn {
    color: red;
    font-size: 0.37rem;
  }

  .ynm {
    width: 40%;
  }
}

.van-button--primary {
  width: 8.03rem; /* 602/75 */
  background-color: #ff9900;
  border: 1px solid #ff9900;
}
</style>