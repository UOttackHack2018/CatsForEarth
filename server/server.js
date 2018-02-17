var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Users = require('./db.js');

var app = express();

app.use(bodyParser.json());

app.get('/getcats', (req, res) => {
  Users.findOne({ 'username': req.query.user}, 'cats', (err, user) => {
    if (err) {
      console.error(err);
    }
    res.send(user.cats);
  });
});

app.get('/newcat', (req, res) => {
  Users.findOne({ 'username': req.query.username }, (err, user) => {
    if (err) {
      console.error(err);
    }
    user.cats.push({ 'headId': req.query.headId, 'earsId': req.query.earsId, 'name': req.query.name });
    user.save( (err, updatedUser) => {
      if (err) {
        console.error(err);
      }
      res.send(updatedUser);
    });
  });
});

app.listen(3000, () => console.log('Server ready'));
