import Vue from 'vue';
import FastClick from 'fastclick';
// import { AjaxPlugin } from 'vux';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;
FastClick.attach(document.body);
// Vue.use(AjaxPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
