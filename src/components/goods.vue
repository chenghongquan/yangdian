<template>
  <div class="box">
    <!-- 头部按钮栏 -->
    <div class="ban-btn clearfix">
      <van-icon name="arrow-left" size="25" class="ibtn ileft ibtn-back" @click="back" />
      <van-icon name="more" size="30" class="ibtn iright" />
      <van-icon name="shopping-cart-o" size="20" class="ibtn iright ibtn-car" />
    </div>
    <van-swipe :autoplay="3000" indicator-color="#ff9900" indicator-size="10">
      <van-swipe-item v-for='(item,index) in goodsnews.swiperImgArr' :key='index'>
        <img :src="item" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="goods-title clearfix">
      <div class="clearfix">
        <div class="goodsnews">
          <p
            class="van-multi-ellipsis--l2"
          >{{goodsnews.name}}</p>
        </div>
        <div class="collect">
          <van-icon name="star-o" size="20" />收藏
        </div>
      </div>
      <div class="price-box">
        <div class="price">
          <span class="cur">￥{{goodsnews.reduct_price}}</span>
          <br />
          <del class="old">￥{{goodsnews.original_price}}</del>
        </div>
        <div class="tag-box">
          <van-tag color="#ff9900">{{(goodsnews.allowance*10).toFixed(2)}}折</van-tag>
          <van-tag color="#ff9900" v-if='goodsnews.isFreeShip'>包邮</van-tag>
          <br />
          <van-tag color="#ff9900" plain v-for='(item,index) in goodsnews.describe' :key='index'>{{item}}</van-tag>
        </div>
      </div>
    </div>
    <!-- 详情页和评价组件 -->
    <van-tabs v-model="active" color="#ff9900" title-active-color="#ff9900">
      <van-tab title="商品详情">
        <div class="goods-pic">
          <img :src="item" alt  v-for='(item,index) in goodsnews.shopDes' :key='index'>
        </div>
      </van-tab>
      <van-tab title="买家口碑">
        <reviews></reviews>
      </van-tab>
    </van-tabs>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
      reset-stepper-on-hide
    />
    <!-- 购买和加入购物车 -->

    <div class="buy-box">
      <div class="all-price clearfix">
        <span class="all-text">总价:</span>
        &nbsp;
        <span class="num">￥88.00</span>
        <van-button color="#ff9900" @click="addcar">加入购物车</van-button>
        <van-button color="red" @click="buynow">立即购买</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import reviews from "./secondrouter/reviews";
// import buynow from "./secondrouter/buynow";
export default {
  data() {
    return {
      goodsnews: "",
      images: [
        require("../assets/imgs/03.png"),
        require("../assets/imgs/04.png")
      ],
      active: 2,
      show: false,
      sku: {
        // 数据结构见下方文档
        tree: [
          {
            k: "大小", // skuKeyName：规格类目名称
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "1L" // skuValueName：规格值名称
                /* imgUrl: "https://img.yzcdn.cn/1.jpg", */ // 规格类目图片，只有第一个规格类目可以定义图片
                /*  previewImgUrl: "https://img.yzcdn.cn/1p.jpg" , */ // 用于预览显示的规格类目图片
              },
              {
                id: "2",
                name: "2L"
              },
              {
                id: "3",
                name: "3L"
              },
              {
                id: "4",
                name: "4L"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "年龄", // skuKeyName：规格类目名称
            v: [
              {
                id: "5", // skuValueId：规格值 id
                name: "5岁以下" // skuValueName：规格值名称
                /* imgUrl: "https://img.yzcdn.cn/1.jpg", */ // 规格类目图片，只有第一个规格类目可以定义图片
                /*  previewImgUrl: "https://img.yzcdn.cn/1p.jpg" , */ // 用于预览显示的规格类目图片
              },
              {
                id: "6",
                name: "3岁以下"
              }
            ],
            k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: "1", // skuId，下单时后端需要
            price: 10000, // 价格（单位分）
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "5", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: "2", // skuId，下单时后端需要
            price: 12000, // 价格（单位分）
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "6", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: "3", // skuId，下单时后端需要
            price: 13000, // 价格（单位分）
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "5", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: "4", // skuId，下单时后端需要
            price: 14000, // 价格（单位分）
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "6", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: "5", // skuId，下单时后端需要
            price: 15000, // 价格（单位分）
            s1: "3", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "5", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: "6", // skuId，下单时后端需要
            price: 16000, // 价格（单位分）
            s1: "3", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "6", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: "6", // skuId，下单时后端需要
            price: 17000, // 价格（单位分）
            s1: "4", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "5", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: "6", // skuId，下单时后端需要
            price: 18000, // 价格（单位分）
            s1: "4", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "6", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "180", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        goods: {
          // 商品标题
          title: "测试商品",
          // 默认商品 sku 缩略图
          picture: "https://img.yzcdn.cn/1.jpg"
        }
      }
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    // 加入购物车方法
    addcar() {
      this.show = true;
    },
    buynow() {
      this.show = true;
    }
  },
  components: {
    reviews
    // buynow
  },
  mounted() {
    this.$axios({
      url: "http://yd.msword.top/getDetails",
      params: {
        pid: this.$route.params.id
      }
    })
      .then(res => {
        this.goodsnews = res.data.data;
        this.sku.tree[0].k=res.data.data.buySelect[0].name;
        this.goods.goods.picture=res.data.data
        console.log(this.goodsnews)
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="stylus" scoped>
* {
  box-sizing: border-box;
}

body {
  background: #eee;
}

.box {
  position: relative;
}

.van-swipe-item {
  text-align: center;

  img {
    width: 10rem; /* 750/75 */
    height: 7.25rem; /* 544/75 */
  }
}

.ban-btn {
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 999;
  padding: 0 10px;
  width: 100%;
}

.ibtn {
  color: #b2b2b2;
  display: inline-block;
  margin: 0 15px;
}

.ileft {
  float: left;
}

.iright {
  float: right;
}

.ibtn-car {
  color: #fff;
  background-color: #b2b2b2;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 5px;
}

.ibtn-back {
  color: #fff;
  background-color: #b2b2b2;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 2px;
}

.goods-title {
  width: 100%;
  height: 2.37rem; /* 178/75 */
  border-top: 2px solid #eee;
  background: #fff;
  padding-left: 0.4rem; /* 30/75 */

  p {
    margin-top: 8px;
  }
}

.goodsnews {
  width: 86%;
  height: 1.2rem; /* 90/75 */
  float: left;
  font-size: 0.4rem; /* 30/75 */
}

.collect {
  width: 13%;
  height: 0.8rem; /* 90/75 */
  color: red;
  float: left;
  font-size: 0.21rem; /* 16/75 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}

.price-box {
  width: 100%;
  height: 1.33rem; /* 100/75 */
  margin-bottom: 10px;
  overflow: hidden;
}

.cur {
  font-size: 0.4rem; /* 30/75 */
  color: red;
}

.old {
  font-size: 0.33rem; /* 25/75 */
  color: #ccc;
}

.price {
  width: 30%;
  float: left;
}

.tag-box {
  width: 60%;
  float: left;
}

// 商品图片盒子
.goods-pic {
  width: 100%;
  margin-bottom: 1.17rem; /* 88/75 */

  img {
    width: 100%;
  }
}

.van-button {
  border: 0;
  // margin-right -4px
  float: right;
}

/* .buy-box {
  position: fixed;
  bottom: 0;
  left: 0;
} */
.all-price {
  width: 100%;
  font-size: 0.4rem; /* 30/75 */
  line-height: 1.17rem; /* 88/75 */
  padding-left: 0.4rem; /* 30/75 */
  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 9999;

  .num {
    color: red;
  }
}

>>>.van-sku-actions {
  display: none;
}

>>>.van-sku-row__item {
  height: 0.61rem; /* 46/75 */
  disable: false;
}

.van-popup--bottom {
  bottom: 44px;
}

.cur {
}
</style>