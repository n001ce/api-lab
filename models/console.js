import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Console
}

const consoleSchema = new Schema({
  name: {type: String, required: true},
  releaseDate: {type: Date, default: Date.now()},
  unitsSold: {type: Number, default: 0}
}, {
  timestamps: true
})

const Console = mongoose.model('Console', consoleSchema)