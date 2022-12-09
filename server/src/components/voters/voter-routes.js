import Router from '@koa/router'
import * as VoterControllers from '#components/voters/voter-controllers.js'

const voters = new Router()

voters.get('/', VoterControllers.index)
voters.get('/:id', VoterControllers.id)
voters.post('/', VoterControllers.create)
voters.put('/:id', VoterControllers.update)
voters.del('/:id', VoterControllers.del)

export default voters