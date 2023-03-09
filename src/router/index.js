import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import SignupView from "../views/SignupView.vue"
import SigninView from "../views/SigninView.vue"
import NotFoundView from "../views/NotFoundView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView', 
      component: HomeView
    },
    {
      path: '/:pathMatch(.*.)*',
      name: 'NotFoundView', 
      component: NotFoundView
    },
    {
      path: '/signin',
      name: 'SigninView',
      component: SigninView
    },
    {
      path: '/signup',
      name: 'SignupView',
      component: SignupView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    
  ]
})

export default router
