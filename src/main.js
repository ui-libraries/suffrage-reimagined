import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BContainer, BRow, BCol, BCard, BNav, BNavItem, BNavItemDropdown, BDropdownItem, BCarousel, BCarouselSlide, BImgLazy } from 'bootstrap-vue'
import { MdToolbar, MdIcon, MdButton, MdDrawer, MdList, MdContent, MdDivider, MdSubheader} from 'vue-material/dist/components'
import SmoothScrollbar from 'vue-smooth-scrollbar'

// Bootstrap-vue components
Vue.component('b-container', BContainer)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)
Vue.component('b-card', BCard)
Vue.component('b-nav', BNav)
Vue.component('b-nav-item', BNavItem)
Vue.component('b-nav-item-dropdown', BNavItemDropdown)
Vue.component('b-dropdown-item', BDropdownItem)
Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)
Vue.component('b-img-lazy', BImgLazy)

// Material UI components
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdButton)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdContent)
Vue.use(MdDivider)
Vue.use(MdSubheader)
Vue.use(SmoothScrollbar)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
        