const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
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

const ListingModel = mongoose.model('listing', listingSchema)

module.exports = ListingModel
