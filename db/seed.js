const smallBusiness = require('../models/business-model');
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
    .then(bees => {
      console.log(bees);
    })
    .catch(err => {
      console.log('Error!', err);
    });
});
