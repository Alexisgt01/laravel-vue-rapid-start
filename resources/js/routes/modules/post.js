import Index from '@/layout/home';

const routes = {
    path: '/post',
    component: Index,
    redirect: '/post/list',
    name: 'Post',
    children: [
        {
            path: "/post/list",
            component: () => import('@/views/post/index.vue'),
            name: "Post",

                icon: 'fas fa-th-large',
            meta: {
                in_nav: true,
                auth: true,
            }

        },
    ],
};

export default routes;
