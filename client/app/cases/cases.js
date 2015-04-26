'use strict';

angular.module('galinaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cases', {
        url: '/cases',
        templateUrl: 'app/cases/cases.html',
        controller: 'CasesCtrl'
      });
     $stateProvider
      .state('case', {
        url: '/cases/:caseID',
        templateUrl: 'app/cases/case.html',
        controller: 'CaseCtrl'
      });
  });