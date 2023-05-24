const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  exteaInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
})

const PlaceModel = mongoose.model('place', placeSchema)

module.exports = PlaceModel
