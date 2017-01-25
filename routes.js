var Patient = require('./app/models/patient');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('home', {

    });
  });

  app.get('/checkin', function(req, res) {
    res.render('checkin', {

    });
  });

  app.post('/checkin', function(req, res) {
  	Patient.findOne({last_name: req.body.input_name}, function(err, p) {
			res.render('checkin', {
	  		patient: p
	  	});
  	});
  });

  app.post('/success', function(req, res) { 
    Patient.findOne({first_name: req.body.patient_first_name, last_name: req.body.patient_last_name}, function(err, p) {
      p.checked = true;
      res.render('checkin_success', {
        patient: p
      });
    });
  });
};