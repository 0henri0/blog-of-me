import '@babel/polyfill';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import VueProgressBar from 'vue-progressbar';
import App from './App.vue';
import router from './routes/web';
import axios from 'axios';
import  './views/assets/app.css';
import './globalComponent.js';

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

Vue.config.productionTip = false;

Vue.use(VueProgressBar, options)

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')