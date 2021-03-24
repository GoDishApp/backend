const User = require('../models/user-model');

const login = (req, res) => {
    User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) {
            console.log(err);
        }
        if (!foundUser) {
            return res.json('Email not found in records.');
        }
        if (foundUser.password === req.body.password) {
            return res.json(foundUser.email);
        }
    })
};

const create = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    };
    User.create(user, (err, userCreated) => {
        if (err) {
            return console.log(err);
        }
        if (!userCreated) {
            return res.json('Unable to create user.');
        }
        return res.json(userCreated);
    });
};

module.exports = {
    login,
    create,
};
