const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/contactMessage');


// ContactMessage GET Handler
router.get('/contact', function(req, res, next) {
  res.send({type: 'GET'});
});

// ContactMessage POST Handler
router.post('/contact', function(req, res, next) {
  // Create and save instance with promise
  ContactMessage.create(req.body).then(function(contactMessage){
    // Send




/*
    res.statusCode = 302;
    res.setHeader("Location", "/contact/success");
    res.end();
*/

/*
    res.send(contactMessage);
*/



  }).catch(next);
});















// GET Example
router.get('/ninjas', function(req, res, next){
  res.send({type: 'GET'});
});

// POST Example
router.post('/ninjas', function(req, res, next){
  res.send({type: 'POST'});
});

// PUT Example
router.put('/ninjas/:id', function(req, res, next){
  res.send({type: 'PUT'});
});

// DELETE Example
router.delete('/ninjas/:id', function(req, res, next){
  res.send({type: 'DELETE'});
});

module.exports = router;
