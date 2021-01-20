import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HomePage.vue'
import Previous from './components/previousConferences/PreviousPage'
import Organizing from './components/organization/OrganizingPage'
import Program from './components/organization/ProgramPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/previous',
      name: 'previous',
      component: Previous,
    },
    {
      path: '/organizing_committee',
      name: 'organizing',
      component: Organizing,
    },
    {
      path: '/program_committee',
      name: 'program',
      component: Program,
    }
  ]
})
