'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CaseSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  client: String,
  notes: [{title: String, text:String, date: Date}],
  events: [{title: String, text: String, start: Date}]

});

module.exports = mongoose.model('Case', CaseSchema);