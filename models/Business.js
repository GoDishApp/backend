const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const dishInfo = new Schema({
  dishName: String,
  dishCuisine: String,
  dishDescription: String,
});

const smallBusiness = new Schema({
  businessId: String,
  name: String,
  address: String,
  city: String,
  state: String,
  postalCode: Number,
  latitude: Number,
  longitude: Number,
  stars: Number,
  reviewCount: Number,
  isOpen: Number, // could be Boolean (0 = 'no') x (1 = 'yes')
  attributes: JSON,
  categories: String,
  hours: JSON,
  dishInfo: dishInfo,
});

module.exports = mongoose.model('Business', smallBusiness);
