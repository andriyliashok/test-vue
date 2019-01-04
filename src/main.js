import Vue from 'vue';
import Paginate from 'vuejs-paginate';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('paginate', Paginate);
new Vue({
  render: h => h(App),
}).$mount('#app');
