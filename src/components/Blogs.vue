<template>
  <div id="blogs">
    <div class="blog-card">
      <seminar :blogs="blogs" />
      <achievement :blogs="blogs" />
      <news :blogs="blogs" />
      <partnership :blogs="blogs" />
      <kompetisi :blogs="blogs" />
      <mapid-blog :blogs="blogs" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Seminar from "@/components/seminar";
import Achievement from "@/components/achievement";
import News from "@/components/news";
import Partnership from "@/components/partnership";
import Kompetisi from "@/components/kompetisi";
import MapidBlog from "@/components/mapid-blog";

export default {
  components: {
    Seminar,
    Achievement,
    News,
    Partnership,
    Kompetisi,
    MapidBlog,
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  computed: {
    ...mapGetters({
      blogs: "getAllBlogs",
    }),
  },
  created() {
    this.$store.dispatch("fetchData");
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  position: fixed;
  left: 1rem;
  top: 10%;
  bottom: 10%;
  width: 18rem;
  background-color: #e4e4e4;
  box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.3);
  border-radius: 0.7rem;
  padding: 3rem 1rem;
  overflow-y: auto;
  scrollbar-color: #9ca1b3 #e4e4e4;
  scrollbar-shadow-color: white;
  scrollbar-width: 0.8rem;
}
</style>
