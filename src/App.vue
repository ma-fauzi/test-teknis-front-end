<template>
  <div id="app">
    <blogs />
  </div>
</template>

<script>
import Blogs from "@/components/Blogs";

export default {
  name: "App",
  components: {
    Blogs,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
