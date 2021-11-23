import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './components/pages/HomePage/HomePage.vue'
import BoardingPage from './components/pages/BoardingPage/BoardingPage.vue'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/home", component: HomePage },
    { path: '/', component: BoardingPage },
   ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')