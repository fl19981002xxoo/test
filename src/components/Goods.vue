<template>
  <div class="goods">
    <input type="checkbox" :checked="state" @change="changeState" />
    <div>
      <img :src="img" alt="" />
      <div>
        <p>{{ name }}</p>
        <div>
          <span>￥{{ price }}</span>
          <!-- <Counter :num="count" @goodsCount="getGoodsCount"></Counter> -->
          <slot name="default" :num="count"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
export default {
  props: {
    img: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
    id: {
      type: Number,
      default: null,
    },
    state: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Counter,
  },
  data() {
    return {};
  },
  methods: {
    changeState(e) {
      //拿到当前最新的状态值传回父组件，修改夫组件的值
      this.$emit("changeState", { id: this.id, checked: e.target.checked });
    },
    getGoodsCount(val) {
      this.$emit("goodsCount", { id: this.id, count: val });
    },
  },
};
</script>

<style lang="less" scoped>
.goods {
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  input {
    margin-right: 8px;
  }
  > div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    img {
      width: 100px;
      height: 100px;
      margin-right: 8px;
    }
    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > div {
        display: flex;
        justify-content: space-between;
        > span {
          color: red;
        }
      }
    }
  }
}
</style>
