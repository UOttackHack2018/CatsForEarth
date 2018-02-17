var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = require('./db.js');

var router = express.Router();
var app = express();

router.use(bodyParser.json());

router.get('/retrieve', (req, res) => {
  res.send('Hi!');
});

app.use(router);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Server ready'));
