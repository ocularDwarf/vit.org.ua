const mongoose = require('mongoose'),
     Schema = mongoose.Schema;

const AlbaniaSchema = new Schema ({
    title: String,
    days: String,
    kurort : String,
    tourCities : String,
    hotel : String,
    tourPlaces: String,
    day1: {
        country : String,
        description: String
    },
    day2: {
        country : String,
        description : String
    }
});

module.exports = mongoose.model('albania', AlbaniaSchema);



