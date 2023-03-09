import axios from "@/service/axios";

export const signup = {
  state: () => ({
    fullname: "",
    username: "",
    password: "",
    isLogged: false,
    logMessage: "",
    role: null,
    token: "",
  }),
  mutations: {
    SetAuth(state, bool) {
      state.isLogged = bool;
    },
    SetMessage(state, message) {
      state.logMessage = message;
    },
    SetToken(state, token) {
      state.token = token;
      window.localStorage.setItem("token", state.token);
    },
    SetUsername(state, param) {
      state.username = param;
      window.localStorage.setItem("username", param);
    },
    SetRole(state, param) {
      state.role = param;
      window.localStorage.setItem("role", param);
    },
    SetLogMessage(state, message) {
      state.logMessage = message;
    },
  },
  actions: {
    Registrate: async ({ commit }, payload) => {
      try {
        const result = await axios.post("/admin/signup", payload);
        if (result.data.status !== 201) {
          console.log(result.data.message);
        }
        commit("SetAuth", true);
        commit("SetToken", result.data.access_token);
        commit("SetMessage", "");
        commit("SetUsername", result.data.username);
        commit("SetRole", result.data.role);
        commit("SetLogMessage", result.data.message);
      } catch (error) {
        console.log(error);
        commit("SetMessage", error.result.data.message);
        commit("SetToken", "");
        commit("SetAuth", false);
        commit("SetUsername", "");
        commit("SetRole", "");
      }
    },
  },
};
