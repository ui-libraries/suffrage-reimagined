import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import BaseScrapbook from '../components/ScrapbookPieces/BaseScrapbook'
import ScrapbookBody from '../components/ScrapbookPieces/ScrapbookBody'
import BaseTab1854 from '../components/1854/BaseTab1854'
import BaseTab1854Intro from '../components/1854/sub-tabs/intro/BaseTab1854Intro'
import Tab1854IntroPage1 from '../components/1854/sub-tabs/intro/Tab1854IntroPage1'
import Tab1854IntroPage2 from '../components/1854/sub-tabs/intro/Tab1854IntroPage2'

const routes = [{
  path: '/',
  component: BaseScrapbook,
  children: [{
    path: '',
    component: ScrapbookBody,
    children: [{
      path: 'tab-1854',
      component: BaseTab1854,
      children: [{
        path: 'intro',
        component: BaseTab1854Intro,
        children: [{
          path: 'pages/1',
          component: Tab1854IntroPage1,
        }, {
          path: 'pages/2',
          component: Tab1854IntroPage2, query: { page: '2' }
        }]
      }]
    }],
  }],
}]

const router = new VueRouter({
  routes,
  mode: 'history' //might funk things up during production
})

export default router