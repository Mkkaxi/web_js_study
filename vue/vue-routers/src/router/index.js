import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld'
import Hi from '@/components/Hi'
// import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Error from '@/components/Error'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '*',
      component: Error
    },
    {
      path: '/Hi',
      name: 'Hi',
      component: Hi,
      children: [
        {
          path: 'hi1',
          name: 'hi1',
          // component: Hi1,
          redirect: '/'
        },
        {
          path: 'hi2',
          component: Hi2,
          alias: '/sss'
        },

      ]
    },
    {
      path: '/abc',
      component: Error,
      beforeEnter: (to, from, next) => {
        console.log('我今入了404页面');
        console.log(to);
        console.log(from);
        next()
      }
    }
  ]
})