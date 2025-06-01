import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProductView from '../views/ProductView.vue'
import AllProductView from '../views/AllProductsView.vue'
import EnterpriseView from '../views/EnterpriseView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/allProduct',
      name: 'allProduct',
      component: AllProductView
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: EnterpriseView
    },



  ],
})

export default router
