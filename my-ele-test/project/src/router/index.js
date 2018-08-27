import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/components/Msite'
import Shop from '@/components/Shop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'Msite',
      component: Msite
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
