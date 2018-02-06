import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import db from './datastore'

import 'bulma/css/bulma.css'

Vue.use(require('vue-pusher'), {
  api_key: '8d8c103f64693bb64a39',
  options: {
    cluster: 'ap1',
    encrypted: true
  }
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.db = db
Vue.appInfo = {
  name: 'kalli'
}

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
