import Index from '@/layout/auth';

const routes = {
    path: '/',
    component: Index,
    redirect: '/login',
    name: 'Auth',
    children: [
        {
            path: "login",
            component: () => import('@/views/auth/login'),
            name: "Login",
            meta: {
                auth: false,
                in_nav: false,
            }

        },
    ],
};

export default routes;
