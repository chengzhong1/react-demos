<template>
  <div id="tab-bar">
    <slot></slot>
    <!-- <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item> -->
    <!-- <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/category.svg" alt="" />
      首页
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/category.svg" alt="" />
      分类
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/category.svg" alt="" />
      购物车
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/category.svg" alt="" />
      我的
    </div> -->
  </div>
</template>

<script>
// import TabBarItem from "./TabBarItem.vue";
export default {
  name: "TabBar",
  components: {},
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgb(100, 100, 100, 0.2);
}
</style>