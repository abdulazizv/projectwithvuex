import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Registration from "../views/Registration.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import AdminList from "../views/AdminList.vue";
import Admin from "../views/Admin.vue";
import AddAdmin from "../views/AddAdmin.vue";
import AddCategory from "../views/AddCategory.vue";
import CategoryList from "../views/CategoryList.vue";
import Categories from "../views/Category.vue";
import Posts from "../views/Posts.vue";
import AddPost from "../views/AddPost.vue";
import PostList from "../views/PostList.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/signup",
      name: "registrstion",
      component: Registration,
    },
    {
      path: "/signin",
      name: "login",
      component: Login,
    },
    {
      path: "/category",
      name: "category",
      component: Categories,
      redirect: "/category/list",
      children: [
        {
          path: "/category/add",
          name: "addcategory",
          component: AddCategory,
        },
        {
          path: "/category/list",
          name: "listcategory",
          component: CategoryList,
        },
      ],
    },
    {
      path: "/post",
      name: "post",
      component: Posts,
      redirect: "/post/list",
      children: [
        {
          path: "/post/add",
          name: "addpost",
          component: AddPost,
        },
        {
          path: "/post/list",
          name: "listpost",
          component: PostList,
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      redirect: "/admin/list",
      children: [
        {
          path: "/admin/add",
          name: "addadmin",
          component: AddAdmin,
        },
        {
          path: "/admin/list",
          name: "listadmin",
          component: AdminList,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: NotFound,
    },
  ],
});

export default router;
