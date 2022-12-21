import Router from '@koa/router'
import campaignRoutes from '#components/campaign/campaign-routes.js'
import voteRoutes from '#components/vote/vote-routes.js'

const API_V1_ROUTER = new Router({ prefix: '/api/v1' })

API_V1_ROUTER.use('/campaign', campaignRoutes.routes(), campaignRoutes.allowedMethods())
API_V1_ROUTER.use('/vote', voteRoutes.routes(), voteRoutes.allowedMethods())

export { API_V1_ROUTER }