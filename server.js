const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect MongoDB
mongoose.connect('mongodb://localhost/craftapplied', {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

// Middleware: Static files source
app.use(express.static('dist'));
// Middleware: Body Parser
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
// Middleware: Require API
app.use('/api', require('./routes/api'));
// Middleware: Error Handling
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({Error: err.message});
});

app.listen(process.env.port || 8080, function(){
  console.log('Listening for requests...');
});
