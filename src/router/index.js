import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demointro from '../views/Demo_intro.vue'
import demoinput from '../views/Demo_input.vue'
import metEvent from '../views/Demo_methodEvent.vue'
import demo3 from '../views/Demo_data.vue'
import demo4 from '../views/Demo_computed.vue'
import demo5 from '../views/Demo_binding.vue'
import demo6 from '../views/Demo_InputForm.vue'
import demo7 from '../views/Demo_trim.vue'
import demo8 from '../views/Demo_slotClock.vue'
import myclock from '../components/mylayout/clock.vue'
import demo9 from '../views/Demo_condition.vue'
import demo10 from '../views/Demo_Loop.vue'
import demo11 from '../views/Demo_Interval.vue'
import demo12 from '../views/Demo_domjs.vue'
import demo13 from '../views/Demo_Filters.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // Fix route to demo intro page
    path: "/demointro",
    name: 'demointro',
    component: demointro
  },
  {
    // Fix route to demo intro page
    path: "/demoinput",
    name: 'demoinput',
    component: demoinput
  },
  {
    // Fix route to demo intro page
    path: "/metEvent",
    name: 'metEvent',
    component: metEvent
  },
  {
    // Fix route to demo intro page
    path: "/demo3",
    name: 'demo3',
    component: demo3
  },
  {
    path: "/demo4",
    name: 'demo4',
    component: demo4
  },
  {
    path: "/demo5",
    name: 'demo5',
    component: demo5
  },
  {
    path: "/demo6",
    name: 'demo6',
    component: demo6
  },
  {
    path: "/demo7",
    name: 'demo7',
    component: demo7
  },
  {
    path: "/demo8",
    name: 'demo8',
    component: demo8
  },
  {
    path: "/myclock",
    name: 'myclock',
    component: myclock
  },
  {
    path: "/demo9",
    name: 'demo9',
    component: demo9
  },
  {
    path: "/demo10",
    name: 'demo10',
    component: demo10
  },
  {
    path: "/demo11",
    name: 'demo11',
    component: demo11
  },
  {
    path: "/demo12",
    name: 'demo12',
    component: demo12
  },
  {
    path: "/demo13",
    name: 'demo13',
    component: demo13
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
