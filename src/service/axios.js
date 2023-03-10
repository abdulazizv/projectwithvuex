import axios from "axios";
let AUTH_TOKEN = window.localStorage.getItem("token");
axios.defaults.baseURL = "http://3.92.175.77:3210";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
export default axios;
