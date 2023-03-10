import axios from "@/service/axios.js";
let token = window.localStorage.getItem("token");

export const createPost = {
  state: () => ({ message: "" }),

  mutations: {
    SET_MESSAGE(state, payload) {
      state.message = payload;
      console.log(token);
    },
  },

  actions: {
    ADD_POST: async ({ commit }, payload) => {
      try {
        console.log(token);
        const response = await axios.post("/posts", payload, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response);
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
