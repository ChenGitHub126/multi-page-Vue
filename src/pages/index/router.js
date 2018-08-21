import Vue from 'vue';
import Router from 'vue-router';
import NotFoundComponent from '@/components/404page.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFoundComponent,
    }, {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue').then(m => m.default),
    },
    // {
    //   path: '/other',
    //   name: 'other',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Other,
    // },
  ],
});
