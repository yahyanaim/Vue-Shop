import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/features',
    name: 'slider',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    scrollBehavior (to) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        }
      }
    },
    component: () => import(/* webpackChunkName: "about" */ '../components/slider.vue')
  },

  {
    path: '/partner',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    scrollBehavior (to) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        }
      }
    },
    component: () => import(/* webpackChunkName: "about" */ '../components/blog.vue')
  },
  {
    path: '/sneakers',
    name: 'slider',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    scrollBehavior (to) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        }
      }
    },
    component: () => import(/* webpackChunkName: "about" */ '../components/blog.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
