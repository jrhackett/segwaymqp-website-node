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

  app.post('/checkin_success', function(req, res) { 
    Patient.findOne({first_name: req.body.patient_first_name, last_name: req.body.patient_last_name}, function(err, p) {
      p.checked = true;
      p.save(function(err) {
        if(err) {
            console.log('Error saving the patient to the database: ' + err);
        } else {
            res.render('checkin_success', {
                patient: p
            });
        }
      });
    });
  });

  app.get('/contact_staff', function(req, res) {
    // TODO implement a messaging system for the staff to use on the backend here
    // could also implement more stuff for where the robot is and which staff is coming
    // perhaps tie in the patient's name as well
    console.log("SOMEONE NEEDS HELP AT THE ROBOT");
    res.render('contact_staff', {
    
    });
  });

  app.get('/directions', function(req, res) {
    res.render('directions', {

    });
  });

  app.post('/directions', function(req, res) {
    console.log("POST: directions " + req.body.destination);
    res.render('directions_success', {
      // TODO add a picture to be shown here
    });
  });

  app.get('/leadme', function(req, res) {
    res.render('directions', {

    });
  });

  app.post('/leadme', function(req, res) {
    console.log("POST: leadme " + req.body.destination);
    res.render('leadme_success', {
      // TODO add a picture to be shown here
    });
  });

  app.get('/register', function(req, res) {
    res.render('register', {
      
    });
  });

  app.post('/register', function(req, res) {
    var newPatient = Patient()
    newPatient.first_name = req.body.input_first_name
    newPatient.last_name = req.body.input_last_name
    newPatient.gender = req.body.input_gender
    newPatient.checked = true
    newPatient.save(function(err) {
      res.render('checkin_success', {
        patient: newPatient
      });
    });
  });
};