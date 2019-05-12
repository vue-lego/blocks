import Vue from 'vue';
import App from './App.vue';
import { BCopyPlugin } from './components/BCopy';

Vue.config.productionTip = false;
Vue.use(BCopyPlugin);
new Vue({
  render: h => h(App)
}).$mount('#app');
