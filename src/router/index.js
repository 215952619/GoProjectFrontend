import { createRouter, createWebHistory } from 'vue-router'
import { routerGuarder } from './guard'
import { routes } from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default routerGuarder(router)
