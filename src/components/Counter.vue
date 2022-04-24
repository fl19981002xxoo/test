<template>
  <div class="counter">
    <span @click="sub">-</span>
    <span>{{ count }}</span>
    <span @click="add">+</span>
  </div>
</template>

<script>
export default {
  props: ["num"],
  data() {
    return {
      count: this.num,
    };
  },
  methods: {
    sub() {
      if (this.count === 0) {
        this.count = 0;
      } else {
        this.count--;
      }
      this.$emit("goodsCount", this.count);
    },
    add() {
      if (this.count === 9) {
        this.count = 9;
        alert("最多添加9件");
      } else {
        this.count++;
      }
      this.$emit("goodsCount", this.count);
    },
  },
};
</script>

<style lang="less" scoped>
.counter {
  text-align: center;
  vertical-align: middle;
  span {
    font-size: 20px;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  span:nth-child(2) {
    display: inline-block;
    width: 30px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
}
</style>
