var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  //TODO: add price
  cats: [{ headId: Number, earsId: Number, name: String }],
  activities: [{ location: String, activityType: String, time: String, duration: Number, points: Number }],
  points: Number
  //TODO: add useable points
});

var Users = mongoose.model('user', userSchema);

module.exports = Users;
