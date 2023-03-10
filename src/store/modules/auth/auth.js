import axios from "../../../service/axios";

const loginAdmin = {
  state: () => ({
    admin: {},
    isAuth: false,
    authMessage: "",
    token: "",
    role: [],
  }),
  mutations: {
    SET_ADMIN(state, data) {
      state.admin = data;
      localStorage.setItem("roles", data.roles);
      localStorage.setItem("username", data.username);
    },
    SET_AUTH(state, bool) {
      state.isAuth = bool;
      window.localStorage.setItem("auth", state.isAuth);
    },
    SET_MESSAGE(state, message) {
      state.authMessage = message;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      window.localStorage.setItem("token", state.token);
    },
  },
  actions: {
    async LOGIN_ADMIN({ commit }, payload) {
      try {
        console.log(payload);
        const response = await axios.post("/admin/login", payload);
        console.log(response);
        commit("SET_ADMIN", response.data.admin);
        commit("SET_AUTH", true);
        commit("SET_TOKEN", response.data.admin.token);

        return response;
      } catch (error) {
        console.log(error);
        commit("SET_MESSAGE", error.response.data.message);
        commit("SET_ADMIN", "");
        commit("SET_AUTH", false);
        commit("SET_TOKEN");
      }
    },
  },
};

export default loginAdmin;
