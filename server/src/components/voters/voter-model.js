import mongoose from "mongoose"

const { Schema } = mongoose

const voterSchema = new Schema({
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

const Voter = mongoose.model('Voter', voterSchema)

export default Voter

