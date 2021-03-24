const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const dishInfo = new Schema({
  dish_name: String,
  dish_cuisine: String,
  dish_description: String,
});

const smallBusiness = new Schema({
  business_id: String,
  name: String,
  address: String,
  city: String,
  state: String,
  postal_code: Number,
  latitude: Number,
  longitude: Number,
  stars: Number,
  review_count: Number,
  is_open: Number, // could be Boolean (0 = 'no') x (1 = 'yes')
  attributes: JSON,
  categories: String,
  hours: JSON,
  dish_info: [dishInfo],
});

module.exports = mongoose.model('smallBusiness', smallBusiness);
