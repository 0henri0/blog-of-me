import '@babel/polyfill';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './routes/web';
import  './views/assets/app.css';
import './globalComponent.js';

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')