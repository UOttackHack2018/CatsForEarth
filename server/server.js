var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Users = require('./db.js');
var Activities = require('./activities.js');

var app = express();

//MongoDB url
var url = 'mongodb://localhost:27017/CatsforEarth';

mongoose.connect(url);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/activities/getactivities', (req, res) => {
  Activities.find({ }, (err, activities) => {
    if (err) {
      console.error(err);
    }
    res.send(activities);
  });
});

app.get('/activities/getactivity', (req, res) => {
  Activities.find({ 'id': req.query.id }, (err, activity) => {
    if (err) {
      console.error(err);
    }
    res.send(activity);
  });
});

app.post('/activities/addactivity', (req, res) => {
  Activities.create({
    'location': req.query.location,
    'activityType': req.query.activityType,
    'duration': req.query.duration,
    'points': req.query.points
  }, (err, activity) => {
    if (err) {
      console.error(err);
    }
    res.send(activity);
  });
});



app.get('/users/getuser', (req, res) => {
  Users.findOne({ 'username': req.query.username }, (err, user) => {
    if (err) {
      console.error(err);
    }
    res.send(user);
  });
});

app.get('/users/getusers', (req, res) => {
  Users.find({ }, (err, users) => {
    //TODO: add error-checking
    res.send(users);
  });
});

app.get('/users/getcats', (req, res) => {
  Users.findOne({ 'username': req.query.username }, 'cats', (err, user) => {
    if (err) {
      console.error(err);
    }
    res.send(user.cats);
  });
});

app.get('/users/getpoints', (req, res) => {
  Users.findOne({ 'username': req.query.username }, 'points', (err, user) => {
    if (err) {
      console.error(err);
    }
    res.send(user.points.toString());
  });
});

app.get('/users/leaderboard', (req, res) => {
  Users.find({ }).
  sort({ points: -1 }).
  limit(10).
  select('username points').
  exec( (err, users) => {
    if (err) {
      console.error(err);
    }
    res.send(users);
  });
});

app.post('/users/addcat', (req, res) => {
  Users.findOne({ 'username': req.query.username }, 'cats', (err, user) => {
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

app.post('/users/addactivity', (req, res) => {
  Users.findOne({ 'username': req.query.username }, 'activities', (err, user) => {
    if (err) {
      console.error(err);
    }
    user.activities.push({ 'location': req.query.location, 'activityType': req.query.activityType, 'time': req.query.time, 'duration': req.query.duration, 'points': req.query.points });
    user.save( (err, updatedUser) => {
      if (err) {
        console.error(err);
      }
      res.send(updatedUser);
    });
  });
});

app.put('/users/updatepoints', (req, res) => {
  Users.findOne({ 'username': req.query.username }, 'points', (err, user) => {
    if (err) {
      console.error(err);
    }
    user.points = req.query.points;
    user.save( (err, updatedUser) => {
      if (err) {
        console.error(err);
      }
      res.send(updatedUser);
    });
  });
});

//TODO: test this!
app.post('/users/adduser', (req, res) => {
  Users.create({
    'username': req.query.username,
    'password': req.query.password,
    'cats': req.query.cats,
    'activities': req.query.activities,
    'points': req.query.points
  }, (err, user) => {
    if (err) {
      console.error(err);
    }
    res.send(user);
  });
});

app.listen(3001, () => console.log('Server ready'));
