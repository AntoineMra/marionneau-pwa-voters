import Vote from '#components/vote/vote-model.js'
import Joi from 'joi'

export async function index (ctx) {
  try {
    const votes = await Vote.find({})
    ctx.ok(votes)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function id (ctx) {
  try {
    if(ctx.params.id.length <= 0) return ctx.notFound({ message: 'Id missing, vote ressource not found' })
    const vote = await Vote.findById(ctx.params.id).populate('vote')
    ctx.ok(vote)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function create (ctx) {
  try {
    const VoteValidationSchema = Joi.object({ // TODO : Add Data Structure
      title: Joi.string().required(),
      purpose: Joi.string(),
      choices: Joi.array().required(),
    })
    const { error, value } = VoteValidationSchema.validate(ctx.request.body)
    if(error) throw new Error(error)
    const vote = await Vote.create(value)
    ctx.ok(vote)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function update (ctx) {
  try {
    const VoteValidationSchema = Joi.object({ // TODO : Add Data Structure
      title: Joi.string().required(),
      purpose: Joi.string(),
      choices: Joi.array().required(),
      totalVotes: Joi.number()
    })
    const { error, value } = VoteValidationSchema.validate(ctx.request.body)
    if(error) throw new Error(error)
    const vote = await Vote.findByIdAndUpdate(ctx.params.id, value, { runValidators: true, new: true })
    ctx.ok(vote)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function del (ctx) {
  try {
    await Vote.findByIdAndDelete(ctx.params.id)
    ctx.ok()
  } catch (error) {
    ctx.badRequest({ message: e.message })
  }
}