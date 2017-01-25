// load the things we need
var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
    first_name: { type: String, default: '' },
    last_name: { type: String, default: ''},
    gender: {type: String, default: '' },
    checked: { type: Boolean, default: false }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Patient', patientSchema);
