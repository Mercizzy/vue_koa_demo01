import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import axios from './http/index'

Vue.use(ElementUI)

Vue.prototype.http = axios.http

Vue.config.productionTip = false

Vue.mixin({
  data: function () {
    return {
      axios: axios,
      // Base64: require('js-base64').Base64,
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
