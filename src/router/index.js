import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import HomeHotChild from '../components/home/homehotchild.vue'
import HomeHotChild2 from '../components/home/homehotchild 2.vue'
import Order from '../pages/Order.vue'
import Self from '../pages/Self.vue'
import City from '../pages/City.vue'
import Detail from '../pages/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home/homehotchild'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/Home/homehotchild',
        name: 'HomeHotChild',
        component: HomeHotChild
      },
      {
        path: '/home/HomeHotChild2',
        name: 'HomeHotChild2',
        component: HomeHotChild2
      }
    ]
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Self',
    name: 'Self',
    component: Self
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
