import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default {
  getAllPosts() {
    return axios.get("/posts/");
  },

  getAllDrafts() {
    return axios.get("/drafts/");
  },

  createDrafts(payload) {
    return axios.post("/drafts/", payload);
  }
};
