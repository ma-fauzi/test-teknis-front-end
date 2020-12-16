<template>
  <div id="partnership">
    <div class="title">PARTNERSHIP</div>
    <div class="card-content" v-for="s in partnership" :key="s._id">
      <span>{{ s.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partnership: [],
    };
  },
  props: {
    blogs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    blogs() {
      const partnership = this.blogs.filter((dt) => {
        return dt.sub_bracket === "partnership";
      });

      this.partnership = partnership;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-content {
  width: 100%;
  margin-bottom: 0.6rem;
  padding: 0.7rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.3);
  font-weight: 300;

  span {
    font-size: 0.9rem;
  }
}

.title {
  width: 100%;
  color: white;
  background-color: #17a2b8;
  padding: 0.6rem;
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  margin: 1.3rem 0;
}
</style>
