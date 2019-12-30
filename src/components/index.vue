<template>
  <div>
    <!-- 头部盒子 -->
    <div class="heard-box">
      <search></search>
    </div>
    <!-- 商品区 -->
    <div class="cantain">
      <div class="goods-box" v-for="(item,index) in data1" :key="index">
        <div class="title">
          <i :class="iconclass[index]"></i>
          <span>{{item.name}}</span>
        </div>
        <ul class="clearfix">
          <!-- 动态路由，后续要加商品id -->
          <li class="todaygoods" v-for="list in item.list" :key="list.id">
            <router-link :to="'/goods/'+list.id">
              <img :src="list.thumbnail" alt />
              <br />
              <span class="cur">
                <span>￥</span>
                {{list.reduct_price}}
              </span>&nbsp;&nbsp;&nbsp;
              <del class="old">￥{{list.original_price}}</del>
              <p class="van-multi-ellipsis--l2">{{list.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部导航 -->
    <footernav></footernav>
  </div>
</template>

<script>
//引入公共底部组件
import footernav from "./public/footernav";
import search from "./public/search";
export default {
  data() {
    return {
      active: 0,
      goodsid: "n",
      data1: "",
      iconclass: [
        "taday",
        "mother",
        "meizhuang",
        "furniture",
        "food",
        "airplane"
      ],
      pid: ""
    };
  },
  components: {
    footernav,
    search
  },
  mounted() {
    this.$axios({ url: "http://yd.msword.top/getIndexData" })
      .then(res => {
        this.data1 = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
* {
  box-sizing: border-box;
}

// 头部盒子
.heard-box {
  width: 100%;
  height: 6.93rem; /* 520/75 */
  padding-top: 0.87rem; /* 65/75 */
  background: url('../assets/imgs/01.png') no-repeat;
  background-size: 100%;
}

.cantain {
  width: 100%;
  padding: 30px 0;
  background: #fafafa;
  margin: 0 0 20px 0;
}

.goods-box {
  width: 100%;
  margin-bottom: 20px;
}

.title {
  width: 100%;
  margin: 0 0 20px 0;
  padding: 0 0.5rem; /* 20/75 */

  i {
    display: inline-block;
    width: 0.53rem; /* 40/75 */
    height: 0.53rem; /* 40/75 */
    background-size: 90%;
    background-repeat: no-repeat;
  }

  span {
    font-size: 16px;
    color: #686868;
  }
}

.goods-box i:nth-of-type(2) {
  background: url('../assets/imgs/icon/baby.png');
  background-position: 0 2px;
}

// 标题小图标
.taday {
  background: url('../assets/imgs/icon/hot.png');
}

.mother {
  background: url('../assets/imgs/icon/baby.png');
  background-position: 0 2px;
}

.meizhuang {
  background: url('../assets/imgs/icon/meizhuang.png');
  background-position: 0 2px;
}

.furniture {
  background: url('../assets/imgs/icon/furniture.png');
  background-position: 0 2px;
}

.food {
  background: url('../assets/imgs/icon/food.png');
  background-position: 0 -1px;
}

.airplane {
  background: url('../assets/imgs/icon/airplane.png');
  background-position: 0 2px;
}

// 商品详情
.todaygoods {
  float: left;
  width: 4.37rem; /* 328/75 */
  height: 6.21rem; /* 466/75 */
  background: #fff;
  padding: 5px;
  margin-left: 0.37rem; /* 28/75 */
  border: 1px solid #efefef;
  color: #adadad;

  img {
    width: 3.33rem; /* 250/75 */
    height: 4rem; /* 300/75 */
    margin: 0 0 10px 15px;
  }

  p {
    font-size: 0.4rem; /* 30/75 */
    margin-top: 10px;
  }
}

// 标价颜色
.cur {
  color: #e60012;
  font-size: 16px;
}

.old {
  font-sixe: 15px;
  text-decoration: middle;
}

.cur2 {
  color: #ffc37d;
  font-size: 16px;
}

.old2 {
  color: #888888;
  font-size: 15px;
}

.c555 {
  color: #555;
}
</style>
