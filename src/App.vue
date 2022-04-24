<template>
  <div class="page">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content">
      <div>
        <Goods
          v-for="item in list"
          :key="item.id"
          :img="item.goods_img"
          :name="item.goods_name"
          :price="item.goods_price"
          :count="item.goods_count"
          :id="item.id"
          :state="item.goods_state"
          @changeState="getState"
        >
          <Counter
            #default
            :num="item.goods_count"
            @goodsCount="getGoodsCount(item, $event)"
          ></Counter>
        </Goods>
      </div>
    </div>
    <div class="footer">
      <Footer
        :state="allChecked"
        @changeAllState="getChangeState"
        :allPrice="getAllPrice"
        :allCount="getAllCount"
      ></Footer>
    </div>
  </div>
</template>
<style lang="less" scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 45px;
  }
  .content {
    overflow-y: auto;
  }
  .footer {
    bottom: 0;
    width: 100%;
    height: 50px;
  }
}
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Goods from "@/components/Goods.vue";
import Counter from "@/components/Counter.vue";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
    Goods,
    Counter,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async initCartData() {
      const { data: res } = await axios({
        method: "get",
        url: "https://www.escook.cn/api/cart",
      });
      if (res.status === 200) {
        this.list = res.list;
      }
    },
    getState(obj) {
      //通过自定义时间就拿到了子组件传过来的值
      this.list.some((item) => {
        if (item.id === obj.id) {
          item.goods_state = obj.checked;
          return true;
        }
      });
    },
    getChangeState(val) {
      this.list.forEach((item) => (item.goods_state = val));
    },
    getGoodsCount(item, e) {
      console.log(item, e);
      item.goods_count = e;
    },
  },
  computed: {
    allChecked() {
      return this.list.every((item) => item.goods_state);
    },
    //当选中的数据发生变化的时候，计算出总假以及数量
    getAllPrice() {
      return this.list.reduce((sum, pre) => {
        if (pre.goods_state) {
          return (sum += pre.goods_count * pre.goods_price);
        }
        return sum;
      }, 0);
    },
    getAllCount() {
      return this.list.reduce((sum, pre) => {
        if (pre.goods_state) {
          return (sum += pre.goods_count);
        }
        return sum;
      }, 0);
    },
  },
  created() {
    this.initCartData();
  },
};
</script>
