import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import BootstrapVue from 'bootstrap-vue'
import { MdToolbar, MdIcon, MdButton, MdDrawer, MdList, MdContent, MdDivider, MdSubheader} from 'vue-material/dist/components'

Vue.use(BootstrapVue)
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdButton)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdContent)
Vue.use(MdDivider)
Vue.use(MdSubheader)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
        