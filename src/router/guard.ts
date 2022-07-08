import { Router } from 'vue-router'

export function routerGuarder(router: Router): Router {
    router.beforeEach((to, from, next) => {
        let title = to.matched.reduce((prev, curr) => {
            if (curr?.meta?.title) {
                return `${curr.meta.title}_${prev}`
            } else {
                return prev
            }
        }, '')

        if (title) document.title = title

        next()
    })

    return router
}
