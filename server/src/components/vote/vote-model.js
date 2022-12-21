import mongoose from "mongoose"

const { Schema } = mongoose

const voteSchema = new Schema({ // TODO : Add proper Vote Structure
  voter: {
    type: String,
    required: true
  },
  choice: {
    type: String,
    required: true
  },
  campaign: {
    type: Schema.Types.ObjectId,
    ref: 'Campaign',
    required: true
  }
}, {
  timestamps: true
})

const Vote = mongoose.model('Vote', voteSchema)

export default Vote

