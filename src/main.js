import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

import { BContainer, BRow, BCol, BCard, BCardText, BNav, BNavItem, BNavItemDropdown, BDropdownItem, BCarousel, BCarouselSlide, BImgLazy } from 'bootstrap-vue'
import { MdToolbar, MdIcon, MdButton, MdDrawer, MdList, MdContent, MdDivider, MdSubheader, MdRipple, MdSnackbar } from 'vue-material/dist/components'

// Bootstrap-vue components
Vue.component('b-container', BContainer)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)
Vue.component('b-card', BCard)
Vue.component('b-card-text', BCardText)
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
Vue.use(MdRipple)
Vue.use(MdSnackbar)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "UA-61639511-33" },
}, router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
        