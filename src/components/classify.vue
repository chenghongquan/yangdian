<template>
  <div class="clearfix">
    <div class="heard-box">
      <search></search>
    </div>
    <!-- 分类导航 -->
    <div class="left">
      <van-sidebar v-model="activeKey" @change="onChange" v-if='data1'>
        <van-sidebar-item :title="item.name" v-for="(item,index) in data1" :key="index"  ></van-sidebar-item>
      </van-sidebar>
    </div>
    <!-- 右侧展示区 -->
    <div class="right">
      <ul class="clearfix">
        <li class="classify-list" v-if='data1' v-for="item in data1[num].list" :key="item.name"  >
          <div class="img-box">
            <img :src="item.thumbnail" alt />
          </div>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <footernav></footernav>
  </div>
</template>
<script>
import search from "./public/search";
import footernav from "./public/footernav";
export default {
  data() {
    return {
      activeKey: 0,
      data1: "",
      flag: false,
      num: 0
    };
  },
  components: {
    search,
    footernav
  },
  mounted() {
    this.$axios({
      url: "http://yd.msword.top/getClassify"
    })
      .then(res => {
        this.data1 = res.data.data;
        this.data2 = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onChange(i) {
      this.num = i;
    }
  }
};
</script>
<style lang="stylus" scoped>
* {
  box-sizing: border-box;
}

.heard-box {
  width: 100%;
  height: 1.87rem; /* 140/75 */
  padding: 0.73rem 0 0.27rem; /* 20/75 */
  background-color: #ff9900;
}

.left {
  width: 30%;
  float: left;
}

.right {
  float: left;
  width: 70%;
  padding: 20px 0;
  height 14.67rem /* 1100/75 */
}

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

// 改变vant的固定样式
.van-sidebar-item--select {
  border-color: #1d84a7;
}
</style>