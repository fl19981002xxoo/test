<template>
  <div class="footer">
    <div>
      <input
        type="checkbox"
        id="allChecked"
        :checked="state"
        @click="changeAll"
      />
      <label for="allChecked">全选</label>
    </div>
    <div>
      <span>合计:</span>
      <span>￥{{ allPrice }}</span>
    </div>
    <div>
      <button type="button">结算({{ allCount }})</button>
    </div>
  </div>
</template>

<script>
import bus from "@/eventBus.js";
export default {
  props: {
    state: {
      type: Boolean,
      default: false,
    },
    allPrice: {
      type: Number,
      default: 0,
    },
    allCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeAll(e) {
      console.log(e.target.checked);
      this.$emit("changeAllState", e.target.checked);
    },
  },
  created() {
    bus.$on("sendChecked", (val) => {
      this.checked = val;
      console.log(val);
    });
  },
};
</script>

<style lang="less" scoped>
.footer {
  padding: 0 16px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
  div {
    display: flex;
    align-items: center;
    label {
      margin-left: 8px;
    }
    span:nth-child(2) {
      color: red;
      font-size: 18px;
      font-weight: bold;
    }
    button {
      width: 100px;
      border-radius: 20px;
      height: 40px;
      border: none;
      background: rgb(46, 85, 255);
      color: #fff;
    }
  }
}
</style>
