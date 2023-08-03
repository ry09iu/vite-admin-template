import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: () => import('@/views/welcome/index.vue')
        },
        {
          path: '/data-list',
          name: 'DataList',
          component: () => import('@/views/data-list/index.vue')
        },
        {
          path: '/user',
          name: 'UserManage',
          component: () => import('@/views/user/index.vue')
        }
      ]
    },
  ]
});

export default router;
