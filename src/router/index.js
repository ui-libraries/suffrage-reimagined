import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import BaseScrapbook from '../components/ScrapbookPieces/BaseScrapbook'

const routes = [
  { path: '/', component: BaseScrapbook}
]

const router = new VueRouter({
  routes,
  mode: 'history' //might funk things up during production
})

export default router
