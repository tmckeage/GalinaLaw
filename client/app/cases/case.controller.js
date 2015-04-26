angular.module('galinaApp')
  .controller('CaseCtrl', function ($scope, $http, $stateParams, socket) {
    $scope.cases = cases;
    $scope.caseID = $stateParams.caseID;
    $scope.case = cases[casesIDIndex[$scope.caseID]];

    $scope.formatDate = function(date){
          var dateOut = new Date(date);
          return dateOut;
    };
  });