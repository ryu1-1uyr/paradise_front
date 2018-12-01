import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/about'
import Login from '@/components/login'
import Index from '@/components/index'
import Test from '@/components/test'
import Register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      // redirect: '/login'
    }
  ]
})
