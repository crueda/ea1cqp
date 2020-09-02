import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'hash',
  mode: 'history',
  routes: [
    {
      path: '*',
      component: () => import('../components/map/Entry.vue'),
    },
  ],
})

