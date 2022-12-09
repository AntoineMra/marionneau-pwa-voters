import Voter from '#components/voters/voter-model.js'
import Joi from 'joi'

export async function index (ctx) {
  try {
    const voters = await Voter.find({})
    ctx.ok(voters)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function id (ctx) {
  try {
    if(ctx.params.id.length <= 0) return ctx.notFound({ message: 'Id missing, voter ressource not found' })
    const voter = await Voter.findById(ctx.params.id).populate('voter')
    ctx.ok(voter)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function create (ctx) {
  try {
    const VoterValidationSchema = Joi.object({
      title: Joi.string().required(),
      purpose: Joi.string(),
      choices: Joi.array().required(),
    })
    const { error, value } = VoterValidationSchema.validate(ctx.request.body)
    if(error) throw new Error(error)
    const voter = await Voter.create(value)
    ctx.ok(voter)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function update (ctx) {
  try {
    const VoterValidationSchema = Joi.object({
      title: Joi.string().required(),
      purpose: Joi.string(),
      choices: Joi.array().required(),
      totalVotes: Joi.number()
    })
    const { error, value } = VoterValidationSchema.validate(ctx.request.body)
    if(error) throw new Error(error)
    const voter = await Voter.findByIdAndUpdate(ctx.params.id, value, { runValidators: true, new: true })
    ctx.ok(voter)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function del (ctx) {
  try {
    await Voter.findByIdAndDelete(ctx.params.id)
    ctx.ok()
  } catch (error) {
    ctx.badRequest({ message: e.message })
  }
}