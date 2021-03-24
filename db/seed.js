const smallBusiness = require('../models/Business');
const businessData = require('./sba_atx_res_open.json');

// Business Data
// const businessData = data.map(e => {
//     const business = {};
//     business.id = e.business_id;
//     business.name = e.name;
//     business.address = e.address

// })

smallBusiness.deleteMany({}).then(() => {
  smallBusiness
    .create(businessData)
    .then(business => {
      console.log('Businesses:', business);
    })
    .catch(err => {
      console.log('Error!', err);
    });
});
