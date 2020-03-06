import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Home from '../views/Home'
import Details from "../views/Details";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/details',
    name: 'details',
    component: Details,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router
