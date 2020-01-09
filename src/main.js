import Vue from 'vue'
import App from './App.vue'


import { Tabbar, TabbarItem, icon } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
Vue.use(icon);

import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);


Vue.config.productionTip = false;

import router from './router';

Vue.prototype.test = function() {
	console.log("执行了自定义的 Vue 类方法")
}

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
