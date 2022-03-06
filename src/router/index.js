import { createRouter, createWebHistory } from 'vue-router'
import AboutViewVue from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '../views/LoginView.vue'
import RegisterViewVue from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    }
  ]
})

export default router
