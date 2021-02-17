import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import HomeHotChild from '../components/home/homehotchild.vue'
import HomeHotChild2 from '../components/home/homehotchild 2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/homehotchild',
        name: 'HomeHotChild',
        component: HomeHotChild
      },
      {
        path: '/home/HomeHotChild2',
        name: 'HomeHotChild2',
        component: HomeHotChild2
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
