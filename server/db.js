var mongoose = require('mongoose');

//MongoDB url
var url = 'mongodb://localhost:27017/CatsforEarth';

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  cats: [{ headId: Number, earsId: Number, name: String }],
  activities: [{ location: String, activityType: String, time: String, duration: Number, points: Number }],
  points: Number
});

var Users = mongoose.model('user', userSchema);

module.exports = Users;
