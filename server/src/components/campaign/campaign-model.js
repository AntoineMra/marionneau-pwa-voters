import mongoose from "mongoose"

const { Schema } = mongoose

const campaignSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  purpose: {
    type: String
  },
  choices: {
    type: Array,
    required: true
  },
  totalVotes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const Campaign = mongoose.model('Campaign', campaignSchema)

export default Campaign

