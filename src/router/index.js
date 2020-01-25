import Vue from 'vue'
import Router from 'vue-router'
import Gongxinbu from '@/components/Gongxinbu'
import Headerbox from '@/components/Headerbox'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Classic from '@/components/Classic'
import Works from '@/components/Works'
import Creator from '@/components/Creator'
import Likehot from '@/components/Likehot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Gonxinbu',
      name: 'Gongxinbu',
      component: Gongxinbu
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Classic',
      name: 'Classic',
      component: Classic
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
    {
      path: '/Creator',
      name: 'Creator',
      component: Creator
    },
    {
      path: '/Headerbox',
      name: 'Headerbox',
      component: Headerbox
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Likehot',
      name: 'Likehot',
      component: Likehot
    },
  ]
})
