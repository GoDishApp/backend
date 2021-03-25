const Business = require('../models/Business');
const data = require('./data.json');

// Business Data
const businessData = data.map(e => {
  const business = {};
  business.business_id = e.businessId;
  business.name = e.name;
  business.address = e.address;
  business.city = e.city;
  business.state = e.state;
  business.latitude = e.latitude;
  business.longitude = e.longitude;
  business.stars = e.stars;
  business.reviewCount = e.reviewCount;
  business.attributes = e.attributes;
  business.categories = e.categories;
  business.hours = e.hours;
  business.dishInfo = e.dishInfo;
  return business;
});

Business.deleteMany({}).then(() => {
  Business.create(businessData)
    .then(data => {
      console.log('Businesses:', data);
    })
    .catch(err => {
      console.log('Error!', err);
    });
});
