<template>
  <div>
    <van-nav-bar title="购物车" left-arrow @click-left="onClickLeft" />
    <div class="car-list" v-if="bool">
      <div>
        <ul>
          <li>
            <h3 class>
              <van-icon name="shop-o" />杭州保税区仓
            </h3>
            <van-swipe-cell>
              <van-card
                disabled="false"
                :price="goodspcice"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
              >
                <div slot="tags">
                  <div class="van-icon-box" @click="Selected">
                    <van-icon name="certificate" size="30" :id="cur" @flag="false" />
                  </div>
                </div>
                <div slot="footer">
                  <van-button size="mini" type="default" class="lessbtn" @click="less">-</van-button>
                  <van-button size="mini" type="default" class="addbtn" @click="add">+</van-button>
                </div>
              </van-card>
              <template slot="right">
                <van-button square type="danger" text="删除" />
              </template>
              <div></div>

              <!-- 商品件数 -->
              <div class="goods__num" :v-model="goodsnum">{{goodsnum}}</div>
            </van-swipe-cell>
          </li>
          <li>
            <h3 class>
              <van-icon name="shop-o" />杭州保税区仓
            </h3>
            <van-swipe-cell>
              <van-card
                disabled="false"
                :price="goodspcice"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
              >
                <div slot="tags">
                  <div class="van-icon-box" @click="Selected">
                    <van-icon name="certificate" size="30" :id="cur" @flag="false" />
                  </div>
                </div>
                <div slot="footer">
                  <van-button size="mini" type="default" class="lessbtn" @click="less">-</van-button>
                  <van-button size="mini" type="default" class="addbtn" @click="add">+</van-button>
                </div>
              </van-card>
              <template slot="right">
                <van-button square type="danger" text="删除" />
              </template>
              <div></div>

              <!-- 商品件数 -->
              <div class="goods__num" :v-model="goodsnum">{{goodsnum}}</div>
            </van-swipe-cell>
          </li>
        </ul>
      </div>
      <van-submit-bar :price="allprice" button-text="去结算">
        <van-checkbox>全选</van-checkbox>
        <van-checkbox>编辑</van-checkbox>
      </van-submit-bar>
    </div>
    <div class="temp-car" v-if="!bool">
      <van-icon name="shopping-cart-o" size='40'/>
      <p>购物车还是空的，<br> 快去逛逛吧~</p>
    </div>
    <footernav></footernav>
    <router-view></router-view>
  </div>
</template>
<script>
import footernav from "./public/footernav";
export default {
  data() {
    return {
      goodsnum: 1,
      cur: "",
      flag: false,
      allprice: 0,
      goodspcice: 99,
      bool: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    less() {
      if (this.goodsnum == 1) {
        this.goodsnum = 1;
      } else {
        this.goodsnum--;
      }
    },
    add() {
      this.goodsnum++;
    },
    Selected() {
      this.flag = !this.flag;
      if (this.flag) {
        this.cur = "Selected";
        // this.allprice=
      } else {
        this.cur = "";
      }
    }
  },
  components: {
    footernav
  }
};
</script>
<style lang="stylus" scoped>
*{
  box-sizing border-box
}
img {
  width: 2.13rem; /* 160/75 */
  height: 2.13rem; /* 160/75 */
}

#Selected {
  color: red;
}

.van-nav-bar {
  background-color: #ff9900;
}

.van-nav-bar__title {
  color: #fff;
}

.van-nav-bar .van-icon {
  color: #fff;
}

.car-list {
}

.van-icon {
  margin: 10px;
  color: #9d9d9d;
}

h3 {
  color: #9d9d9d;
}

.van-button--danger {
  background-color: #ff9900;
  height: 100%;
}

.van-card__footer {
  text-align: left;
  width: 3.11rem; /* 233/75 */
  height: 0.6rem; /* 45/75 */
  position: absolute;
  top: 60px;
  left: 110px;
}

.lessbtn {
  position: absolute;
  top: 0;
  left: 0;
}

.addbtn {
  position: absolute;
  top: 0;
  right: 0;
}

.van-button--mini {
  min-width: 38px;
}

.goods__num {
  position: absolute;
  top: 61px;
  left: 153px;
  width: 35px;
  height: 18px;
  text-align: center;
  line-height: 24px;
  border: 1px solid #ccc;
}

.van-card__price {
  position: absolute;
  top: 30px;
  left: 140px;
  font-size: 16px;
  color: #000;
}

.van-card__title {
  font-size: 16px;
}

.van-swipe-cell__left {
  text-align: center;
  padding: 0;
  line-height: 1.41rem; /* 106/75 */
}

.van-icon-box {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 17px;
  left: 190px;
}

.van-swipe-cell__wrapper {
  width: 300px; /* 300/75 */
}

.van-submit-bar {
  bottom: 50px;
}
//空购物车样式
.temp-car{
   width 10rem /* 750/75 */
   height 14.48rem /* 1086/75 */
   text-align center
   padding-top 4.37rem /* 328/75 */
   p{
     color #909090
     font-size .52rem /* 39/75 */
   }
}
</style>