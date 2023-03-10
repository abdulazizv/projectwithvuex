import { createStore } from "vuex";
import loginAdmin from "./modules/auth/auth";
import { getAdmins } from "./modules/admin/getAllAdmins";
import { getRoles } from "./modules/role/getAllRoles";
import { createAdmin } from "./modules/admin/createadmin";
import { getCategories } from "./modules/category/getAllCategory";
import { createCategory } from "./modules/category/createCategory";
import { getPosts } from "./modules/post/getAllPosts";
import { createPost } from "./modules/post/createPost";
const store = createStore({
  modules: {
    loginAdmin,
    getAdmins,
    getRoles,
    createAdmin,
    getCategories,
    createCategory,
    getPosts,
    createPost,
  },
});

export default store;
