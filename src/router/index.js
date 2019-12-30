import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import classify from '../components/classify'
import shoppingcar from '../components/shoppingcar'
import my from '../components/my'
import login from '../components/login'
import zhuce from '../components/zhuce'
import goods from '../components/goods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path:'/classify',
      component: classify
    },
    {
      path:'/shoppingcar',
      component: shoppingcar
    },
    {
      path:'/my',
      component:my
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/zhuce',
      component:zhuce
    },{
      path:'/goods/:id',
      component:goods
    }
  ]
})
