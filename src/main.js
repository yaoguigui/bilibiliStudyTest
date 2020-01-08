import Vue from 'vue'
import App from './App.vue'


import { Tabbar, TabbarItem, icon } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
Vue.use(icon);

import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);


Vue.config.productionTip = false;

import router from './router';

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
