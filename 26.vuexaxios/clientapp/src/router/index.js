import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Apicall from '@/components/ApiCall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/apicall',
      name: 'ApiCall',
      component: Apicall
    }
  ]
})
