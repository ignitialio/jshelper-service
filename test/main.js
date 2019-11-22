import Vue from 'vue'
import JsHelper from '../src/components/JsHelper.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(JsHelper),
}).$mount('#app')
