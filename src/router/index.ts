import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routerGuarder } from './guard'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Main',
        components: {
            default: () => import('@/view/Overflow.vue'),
            footer: () => import('@/view/Footer.vue'),
        },
        meta: { title: 'Ghr博客' },
        children: [
            {
                path: '/overflow',
                name: 'Overflow',
                component: () => import('@/view/Overflow.vue'),
                meta: { title: '首页' },
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default routerGuarder(router)
