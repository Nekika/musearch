import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Home from '@/views/Home'
import Artists from '@/views/Artists'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  }
];

const router = new VueRouter({
  routes
});

export default router
