import Vue from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { router } from './common/router-common';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(YmapPlugin, {
  apiKey: 'fd49b70d-b300-4590-976c-fa6e41bcb6d6',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
