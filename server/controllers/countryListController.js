var mongoose = require('mongoose'),
    Country = mongoose.model('albania');

exports.list_all_counties = function (req, res) {
    Country.find({} , function (err, country) {
        if (err)
            res.send(err);
        res.json(country);
    });
};

exports.read_a_country = function (req, res) {
    Country.find(req.params.countryName, function (err, country) {
        if (err)
            res.send(err);
        res.json(country);
    });
};