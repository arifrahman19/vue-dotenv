import Vue from 'vue'
import App from './App.vue'
import dotenv from 'dotenv'

dotenv.config()
console.log(process.env.VUE_APP_NAMA_RS)
console.log(process.env.VUE_APP_ALAMAT)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
