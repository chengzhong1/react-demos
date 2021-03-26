<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button>按钮</button>
  </div>
</template>

<script>
export default {
  name: "cpn",
  data() {
    return {
      message: "hello web99999",
    };
  },
};
</script>
<style scoped>
.title {
  color: brown;
}
</style>