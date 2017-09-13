const express = require('express');
const router = express.Router();
const request = require('request');
const Q = require('q');

const ContactMessage = require('../models/contactMessage');


// ReCaptcha
function verifyHumanity(req) {
  // Q promise
  const d = Q.defer();
  const recaptchaResponse = req.body['g-recaptcha-response'];

  request.post('https://www.google.com/recaptcha/api/siteverify', {
    form: {
      secret:  '6LfIbzAUAAAAAK9sqe2CHXAyavqK8JJbjOSjjVpf',
      response: recaptchaResponse,
      remoteip: req.connection.remoteAddress
    }
  }, (err, httpResponse, body)=>{
    if(err) {
      d.reject(new Error(err));
    } else {
      const r = JSON.parse(body);
      if (r.success) {
        d.resolve(r.success);
      } else {
        d.reject(new Error());
      }
    }
  });
  return d.promise;
}

// ContactMessage GET Handler
router.get('/contact', function(req, res, next) {
  res.send({type: 'GET'});
});

// ContactMessage POST Handler
router.post('/contact', function(req, res, next) {
  // Create and save instance with promise
  ContactMessage.create(req.body).then(function(contactMessage){
    verifyHumanity(req)
      .then(()=>{
        // success
        res.send(contactMessage);
      })
      .catch(()=>{
        // failure
        res.status(400);
        res.send({
          error: 'Please verify that you\'re a human'
      });
    });
  }).catch(next);
});









/*
    res.redirect(307, '/test');
*/

/*
    res.statusCode = 302;
    res.setHeader("Location", "/contact/success");
    res.end();
*/


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
