import Vue from 'vue';
import VueMoment from 'vue-moment';
import VuePaginate from 'vue-paginate';
import App from './App.vue';

import { store } from './store/index';

Vue.config.productionTip = false;
Vue.use(VuePaginate);
Vue.use(VueMoment);
new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
