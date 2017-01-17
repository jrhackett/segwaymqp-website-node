
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('home', {

    });
  });

  app.get('/checkin', function(req, res) {
    res.render('checkin', {

    });
  });
};