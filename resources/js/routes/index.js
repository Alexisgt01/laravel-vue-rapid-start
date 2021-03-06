import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '@/layout/home';
import auth from './modules/auth';
import post from './modules/post';

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                name: 'Dashboard',
                icon: 'fas fa-tachometer-alt',
                meta: {
                    in_nav: true,
                    auth: true,
                }
            },
        ]
    },
    auth,
    post,
];

const router = new VueRouter({
    routes,
    mode: 'history',
    history: true,
});

export default router;
