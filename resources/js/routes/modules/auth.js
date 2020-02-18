import Index from '@/views';

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
        },
    ],
};

export default routes;
