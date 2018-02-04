import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/welcome',
      name: 'welcome-page',
      component: require('@/components/WelcomePage').default
    }
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
