import Campaign from '#components/campaign/campagin-model.js'
import Joi from 'joi'

export async function index (ctx) {
  try {
    const campaign = await Campaign.find({})
    ctx.ok(campaign)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function id (ctx) {
  try {
    if(ctx.params.id.length <= 0) return ctx.notFound({ message: 'Id missing, campaign ressource not found' })
    const campaign = await Campaign.findById(ctx.params.id).populate('campaign')
    ctx.ok(campaign)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function create (ctx) {
  try {
    const CampaignValidationSchema = Joi.object({
      title: Joi.string().required(),
      purpose: Joi.string(),
      choices: Joi.array().required(),
    })
    const { error, value } = CampaignValidationSchema.validate(ctx.request.body)
    if(error) throw new Error(error)
    const campaign = await Campaign.create(value)
    ctx.ok(campaign)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function update (ctx) {
  try {
    const CampaignValidationSchema = Joi.object({
      title: Joi.string().required(),
      purpose: Joi.string(),
      choices: Joi.array().required(),
      totalVotes: Joi.number()
    })
    const { error, value } = CampaignValidationSchema.validate(ctx.request.body)
    if(error) throw new Error(error)
    const campaign = await Campaign.findByIdAndUpdate(ctx.params.id, value, { runValidators: true, new: true })
    ctx.ok(campaign)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function del (ctx) {
  try {
    await Campaign.findByIdAndDelete(ctx.params.id)
    ctx.ok()
  } catch (error) {
    ctx.badRequest({ message: e.message })
  }
}