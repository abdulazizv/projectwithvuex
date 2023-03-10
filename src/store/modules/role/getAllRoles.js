import axios from "@/service/axios.js";
let token = window.localStorage.getItem("token");

export const getRoles = {
  state: () => ({
    roleList: [],
    message: "",
  }),

  mutations: {
    SET_ROLES(state, payload) {
      state.roleList = payload;
    },
    SET_MESSAGE(state, payload) {
      state.message = payload;
    },
  },

  actions: {
    GET_ROLES: async ({ commit }) => {
      try {
        console.log(token);
        const response = await axios.get("/role", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response);
        commit("SET_ROLES", response.data);
        commit("SET_MESSAGE", "");
        return response;
      } catch (err) {
        console.log(err);
        commit("SET_MESSAGE", err.response.data.message);
      }
    },
  },
};
