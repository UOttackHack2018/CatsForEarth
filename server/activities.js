var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var activitySchema = new Schema({
  id: Number,
  location: String,
  activityType: String,
  duration: Number,
  points: Number
}, { collection: 'activities'});

var Activities = mongoose.model('activity', activitySchema);

module.exports = Activities;
