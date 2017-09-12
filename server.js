const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//const uri = 'mongodb://localhost/craftapplied';
const uri = 'mongodb://darrenbarklie:H3r0kuCr4ft4pPli3d;@ds131914.mlab.com:31914/heroku_2v8d6s86';


mongoose.Promise = global.Promise;

// Connect MongoDB
mongoose.connect(uri, {
  useMongoClient: true
});


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


app.listen(process.env.PORT || 8080, function(){
  console.log('Listening for requests...');
});
