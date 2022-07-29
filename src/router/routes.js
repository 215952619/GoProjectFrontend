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
        path: '/user',
        name: 'User',
        components: {
            default: () => Overflow,
            footer: () => Footer,
        },
        meta: { title: '个人主页' },
        children: [
            {
                path: "/collect",
                name: "UserCollect",
                component: () => NotFound,
            },
            {
                path: "/history",
                name: "UserHistory",
                component: () => NotFound,
            },
        ],
    },
    {
        path: '/admin',
        name: 'Admin',
        components: {
            default: () => Overflow,
            footer: () => Footer,
        },
        meta: { title: '管理员页面', needAuth: true, needAdmin: true },
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
