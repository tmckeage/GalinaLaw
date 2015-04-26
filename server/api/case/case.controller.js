/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /cases              ->  index
 * POST    /cases              ->  create
 * GET     /cases/:id          ->  show
 * PUT     /cases/:id          ->  update
 * DELETE  /cases/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Case = require('./case.model');

// Get list of cases
exports.index = function(req, res) {
  Case.find(function (err, lawcases) {
    if(err) { return handleError(res, err); }
    return res.json(200, lawcases);
  });
};

// Get a single case
exports.show = function(req, res) {
  Case.findById(req.params.id, function (err, lawcase) {
    if(err) { return handleError(res, err); }
    if(!lawcase) { return res.send(404); }
    return res.json(lawcase);
  });
};

// Creates a new lawcase in the DB.
exports.create = function(req, res) {
  Case.create(req.body, function (err, lawcase) {
    if(err) { return handleError(res, err); }
    return res.json(201, lawcase);
  });
};

// Updates an existing lawcase in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Case.findById(req.params.id, function (err, lawcase) {
    if (err) { return handleError(res, err); }
    if(!lawcase) { return res.send(404); }
    var updated = _.merge(lawcase, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, lawcase);
    });
  });
};

// Deletes a lawcase from the DB.
exports.destroy = function(req, res) {
  Case.findById(req.params.id, function (err, lawcase) {
    if(err) { return handleError(res, err); }
    if(!lawcase) { return res.send(404); }
    lawcase.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}