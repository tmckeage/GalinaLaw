'use strict';

angular.module('galinaApp')
  .controller('CasesCtrl', function ($scope, $http, $location, socket) {
    $scope.cases = cases;

    $scope.setSelected = function(id) {
     $location.path("cases/" + id);
    };
  });