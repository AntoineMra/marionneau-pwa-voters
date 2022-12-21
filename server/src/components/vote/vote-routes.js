import Router from '@koa/router'
import * as VoteControllers from '#components/vote/vote-controllers.js'

const votes = new Router()

votes.get('/', VoteControllers.index)
votes.get('/:id', VoteControllers.id)
votes.post('/', VoteControllers.create)
votes.put('/:id', VoteControllers.update)
votes.del('/:id', VoteControllers.del)

export default votes