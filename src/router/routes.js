const NotFound = import('@/view/NotFound.vue')
const Overflow = import('@/view/Overflow.vue')
const Footer = import('@/view/Footer.vue')

export const routes = [
    {
        path: '/',
        name: 'Main',
        components: {
            default: () => Overflow,
            footer: () => Footer,
        },
        meta: { title: 'Ghr博客' },
        children: [
            {
                path: '/overflow',
                name: 'Overflow',
                component: () => Overflow,
                meta: { title: '首页' },
            },
            {
                path: '/subject',
                name: 'Subject',
                component: () => NotFound,
                meta: { title: '专题' },
            },
            {
                path: '/library',
                name: 'Library',
                component: () => NotFound,
                meta: { title: '实验室' },
            },
            {
                path: '/about',
                name: 'About',
                component: () => NotFound,
                meta: { title: '关于本站' },
            },
        ],
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => Overflow,
        meta: { title: '管理员页面', needAuth: true },
        children: [
            {
                path: '/user',
                name: 'AdminUser',
                component: NotFound,
            },
            {
                path: '/source',
                name: 'AdminSource',
                component: NotFound,
            },
            {
                path: '/source/edit',
                name: 'AdminSourceEdit',
                component: NotFound,
            },
        ],
    },
    {
        path: '/:match(.*)*',
        name: 'NotFound',
        component: () => NotFound,
    },
]
