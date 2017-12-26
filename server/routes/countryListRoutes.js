module.exports = function (app) {
    var countryList = require('../controllers/countryListController');

    app.route('/country')
        .get(countryList.list_all_counties);
    app.route('/country:countryName')
        .get(countryList.read_a_country);
}