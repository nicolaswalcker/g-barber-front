import Vue from 'vue';
import VueRouter from 'vue-router';
/* import Home from '../views/Home.vue'; */

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Cadastro',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/success',
    name: 'Sucesso',
    component: () => import('../views/Success.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/create-service',
    name: 'Criar Serviço',
    component: () => import('../views/CreateService.vue'),
  },

];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next)=>{
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
});

export default router;
