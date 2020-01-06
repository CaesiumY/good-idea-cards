import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default {
  getAllPosts() {
    return axios.get("/posts/");
  },

  getAllDrafts() {
    return axios.get("/drafts/");
  },

  getSearchData(payload) {
    console.log("payload:", payload);
    const search_query = payload;
    return axios.get("/search/", {
      params: {
        search_query
      }
    });
  },

  createDrafts(payload) {
    return axios.post("/drafts/", payload);
  }
};
