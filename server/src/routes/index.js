import Router from '@koa/router'
import voterRoutes from '#components/voters/voter-routes.js'

const API_V1_ROUTER = new Router({ prefix: '/api/v1' })

API_V1_ROUTER.use('/voters', voterRoutes.routes(), voterRoutes.allowedMethods())

export { API_V1_ROUTER }