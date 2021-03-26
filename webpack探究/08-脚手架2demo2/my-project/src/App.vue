<template>
  <div id="app">
    <router-link to="/home" tag="button">Home</router-link>
    <router-link to="/about">About</router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
