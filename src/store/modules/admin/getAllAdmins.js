import axios from "@/service/axios.js";
let token = window.localStorage.getItem("token");

export const getAdmins = {
  state: () => ({
    adminList: [],
    message: "",
  }),

  mutations: {
    SET_ADMINS(state, payload) {
      state.adminList = payload;
    },
    SET_MESSAGE(state, payload) {
      state.authMessage = payload;
    },
  },

  actions: {
    GET_ADMINS: async ({ commit }) => {
      try {
        console.log(token);
        const response = await axios.get("/admin", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response);
        commit("SET_ADMINS", response.data);
        commit("SET_MESSAGE", "");
        return response;
      } catch (err) {
        console.log(err);
        commit("SET_MESSAGE", err.response.data.message);
      }
    },
  },
};
