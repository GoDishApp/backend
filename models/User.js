const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// may need latitude and longitude fields if zipcode is not enough
const userInfo = new Schema({
  email: String,
  password: String,
  zipcode: Number,
  dietary_preference: {
    type: String,
    enum: ['No preference', 'Vegetarian', 'Vegan'],
    default: 'No preference',
  },
});

mongoose.exports = mongoose.model('User', userInfo);
