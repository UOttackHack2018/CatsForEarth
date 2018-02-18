var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var activitySchema = new Schema({
  location: String,
  activityType: String,
  


  username: String,
  password: String,
  //TODO: add price
  cats: [{ headId: Number, earsId: Number, name: String }],
  activities: [{ location: String, activityType: String, time: String, duration: Number, points: Number }],
  points: Number
  //TODO: add useable points
});

var Activities = mongoose.model('activity', activitySchema, 'activities');

module.exports = Activities;
