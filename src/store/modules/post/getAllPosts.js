import axios from "@/service/axios.js";
let token = window.localStorage.getItem("token");

export const getPosts = {
  state: () => ({
    postsList: [],
    message: "",
  }),

  mutations: {
    SET_POSTS(state, payload) {
      state.postsList = payload;
    },
    SET_MESSAGE(state, payload) {
      state.message = payload;
    },
  },

  actions: {
    GET_POSTS: async ({ commit }) => {
      try {
        console.log(token);
        const response = await axios.get("/posts", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response);
        commit("SET_POSTS", response.data);
        commit("SET_MESSAGE", "");
        return response;
      } catch (err) {
        console.log(err);
        commit("SET_MESSAGE", err.response.data.message);
        return err.response.data;
      }
    },
  },
};
