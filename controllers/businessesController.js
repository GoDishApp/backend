const Business = require('../models/Business');

module.exports = {
  showBusinesses: (req, res) => {
    Business.find({})
      .then(business => {
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
    Business.findById(req.params.id)
      .then(business => {
        res.json(business);
      })
      .catch(err => console.log('Error', err));
  },
};
