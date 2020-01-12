import axios from "axios";

axios.defaults.baseURL = "https://good-idea-cards.herokuapp.com/api";

export default {
  getAllPosts() {
    return axios.get("/posts/");
  },

  createPosts(payload) {
    return axios.post("/posts/", payload);
  },

  getAllDrafts() {
    return axios.get("/drafts/");
  },

  createDrafts(payload) {
    return axios.post("/drafts/", payload);
  },

  deleteDrafts(payload) {
    return axios.delete("/drafts/" + String(payload));
  },

  getSearchData(payload) {
    const search_query = payload;
    return axios.get("/search/", {
      params: {
        search_query
      }
    });
  }
};
