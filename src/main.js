import Vue from 'vue';
import '@/config/globalComponents/index'; // GlobalComponents
import router from './router';
import store from './store';
import App from './App.vue';
Vue.config.productionTip = false;

new Vue({
  name: 'AppVue',
  router,
  store,
  beforeCreate(){
    this.$store.commit('initializeStore');
  },
  render: (h) => h(App),
}).$mount('#app');
