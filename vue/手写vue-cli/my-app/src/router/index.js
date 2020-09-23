import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'


Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router