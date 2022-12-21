import mongoose from "mongoose"

const { Schema } = mongoose

const voteSchema = new Schema({ // TODO : Add proper Vote Structure
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

const Vote = mongoose.model('Vote', voteSchema)

export default Vote

