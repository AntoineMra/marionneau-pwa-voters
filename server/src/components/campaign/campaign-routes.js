import Router from '@koa/router'
import * as CampaignControllers from '#components/campaign/campaign-controllers.js'

const campaigns = new Router()

campaigns.get('/', CampaignControllers.index)
campaigns.get('/:id', CampaignControllers.id)
campaigns.post('/', CampaignControllers.create)
campaigns.put('/:id', CampaignControllers.update)
campaigns.del('/:id', CampaignControllers.del)

export default campaigns