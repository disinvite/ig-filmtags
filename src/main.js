import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueClipboard)

new Vue({
  render: h => h(App),
}).$mount('#app')
