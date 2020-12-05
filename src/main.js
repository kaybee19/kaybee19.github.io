import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Particle BG
import VueParticles from 'vue-particles'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueParticles)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
