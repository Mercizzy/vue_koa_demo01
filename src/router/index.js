import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    meta: {},
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: {},
    component: ()=> import('../views/login.vue')
  },
  {
    path: '/todoList',
    name: 'todoList',
    meta: {},
    component: ()=> import('../views/todo/todoList.vue')
  }
];

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;