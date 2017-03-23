var express = require('express');
var router = express.Router();
var fs = require('fs');

var results;

//Read the data from the services.json file
fs.readFile('json/services.json', 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    results = JSON.parse(data); //Parse the data
  }
});

router.get('/', function(req, res, next) {
  res.render('services', {
    title: 'Services',
    services: results
  });
});

module.exports = router;