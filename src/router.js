import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Order from './pages/Order.vue'
import My from './pages/My.vue'

const routes = [{
  path: '/', name: 'root', redirect: '/home'
},{
  path: '/home', name: 'home', component: Home
},{
  path: '/order', name: 'order', component: Order
},{
  path: '/my', name: 'my', component: My
}]

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes
})

export default router