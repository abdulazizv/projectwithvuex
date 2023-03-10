import axios from "@/service/axios.js";
let token = window.localStorage.getItem("token");

export const getCategories = {
  state: () => ({
    categoryList: [],
    message: "",
  }),

  mutations: {
    SET_CATEGORIES(state, payload) {
      state.categoryList = payload;
    },
    SET_MESSAGE(state, payload) {
      state.message = payload;
    },
  },

  actions: {
    GET_CATEGORIES: async ({ commit }) => {
      try {
        console.log(token);
        const response = await axios.get("/category", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response);
        commit("SET_CATEGORIES", response.data);
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
