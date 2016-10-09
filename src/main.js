import Vue from 'vue'
import accounting from 'accounting'
import pluralize from 'pluralize'
import Shop from './components/shop/Shop'
import store from './store'

Vue.filter('formatMoney', accounting.formatMoney)
Vue.filter('pluralize', pluralize)

new Vue({
  el: 'body',
  store,
  render: h => h(Shop)
})
