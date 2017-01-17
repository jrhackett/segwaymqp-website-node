// load the things we need
var mongoose = require('mongoose');

var staffSchema = mongoose.Schema({
    name: { type: String, default: '' }
    
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Staff', staffSchema);
