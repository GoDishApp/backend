const Business = require('../models/business-model');

module.exports = {
    showBusinesses: (req, res) => {
        Business.find({}).then(
            business => {
                res.json(business);
            }
        )
    },
    showRandomBusiness: (req, res) => {
        Business.aggregate([{ $sample: { size: 1 } }]).then(business => {
            res.json(business);
        });
    },
    showBusinessById: (req, res) => {
        Business.findById(req.params.id). then(business => {
            res.json(business);
        });
    },
};
