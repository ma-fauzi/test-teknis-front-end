import axios from "axios";

const state = {
  blogs: [],
};

const getters = {
  getAllBlogs: (state) => state.blogs,
};

const actions = {
  async fetchData({ commit }) {
    const response = await axios.get(
      "http://api.mapid.io/blog/get_list_docs_public/blog"
    );

    commit("setBlogs", response.data);
  },
};

const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
