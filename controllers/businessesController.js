const Business = require('../models/Business');

module.exports = {
  showBusinesses: (req, res) => {
    Business.find({})
      .then(business => {
        console.log(business);
        res.json(business);
      })
      .catch(err => console.log('Error', err));
  },
  showRandomBusiness: (req, res) => {
    Business.aggregate([{ $sample: { size: 1 } }])
      .then(business => {
        res.json(business);
      })
      .catch(err => console.log('Error', err));
  },
  showBusinessById: (req, res) => {
    console.log(req.params)
    Business.find({})
      .then(business => {
        console.log(business);
        res.json(business);
      })
      .catch(err => console.log('Error', err));
  },
};
