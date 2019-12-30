<template>
  <div>
    <div class="box">
      <div class="reviews-btn">
        <van-tag
          round
          :color="mycolor"
          size="large"
          :class="[index==num?'cur':'']"
          @click="change(index)"
          v-for="(item,index) in option"
          :key="index"
        >{{item}}</van-tag>
      </div>
      <ul v-if="goodsnews.buyerReviews">
        <li class="rev-li" v-for="(item,index) in goodsnews.buyerReviews[options]" :key="index">
          <div class="u-news">
            <span class="uname">{{item.buyerName}}</span>

            <span class="time">{{item.createTime | time}}</span>
          </div>
          <div class="pic-box">
            <img :src="list" v-for="(list,index) in item.postImg" :key="index" alt />
          </div>
          <p class="u-info van-multi-ellipsis--l2">{{item.postDescribe}}</p>
          <p class="c-reply van-multi-ellipsis--l2">
            <span>管理员：</span>
            {{item.adminReviews}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pid: "",
      goodsnews: "",
      num: 0,
      option: ["全部评价", "好评", "差评", "晒单"],
      mycolor: "",
      options: "all"
    };
  },
  mounted() {
    this.$axios({
      url: "http://yd.msword.top/getDetails",
      params: {
        pid: this.$route.params.id
      }
    })
      .then(res => {
        console.log(res);
        this.goodsnews = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    change(i) {
      this.num = i;
      if (i == 0) {
        this.options = "all";
      } else if (i == 1) {
        this.options = "good";
      } else if (i == 2) {
        this.options = "bad";
      } else if (i == 3) {
        this.options = "postForm";
      }
    }
  },
  filters: {
    time(n) {
      var date = new Date(parseInt(n));
      var year = date.getFullYear();
      var mon = date.getMonth() + 1;
      var day = date.getDate();
      var hours = date.getHours();
      var minu = date.getMinutes();
      var sec = date.getSeconds();
      return (
        year + "/" + mon + "/" + day + " " + hours + ":" + minu + ":" + sec
      );
    }
  }
};
</script>
<style lang="stylus" scoped>
.box {
  padding: 0 0.4rem; /* 30/75 */
  margin-bottom: 1.17rem; /* 88/75 */
}

.rev-li {
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
  padding: 10px 0;
}

.reviews-btn {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.16rem /* 12/75 */ 0;
  border-bottom: 1px solid #ccc;
}

.u-news {
  display: flex;
  justify-content: space-between;

  .uname {
    color: #fd9a01;
    font-size: 14px;
  }
}

.u-info {
  color: #c3c3c3;
  margin: 10px 0;
}

.c-reply {
  padding: 0.19rem; /* 14/75 */
  background: #ddd;
  margin-bottom: 0.2rem; /* 15/75 */
  border-radius: 5px;
}

.pic-box {
  overflow: hidden;
  margin: 10px 0;

  img {
    width: 2rem; /* 150/75 */
    height: 2rem; /* 150/75 */
    margin-right: 10px;
  }
}

.cur {
  background: #ff9900;
}
</style>