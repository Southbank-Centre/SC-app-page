'use strict';

/**
 * @ngdoc controller
 * @name SC-app-page.controller:PageCtrl
 * @controller
 *
 * @description
 * Defines the state and behaviour of the $scope for the pageView state
 */

angular.module('SC-app-page')
  .controller('PageCtrl', function ($scope, $stateParams, pageFactory, utilitiesFactory) {

    /**
     * Method for getting one page from the API
     */
    pageFactory.getPage($stateParams.pageId, function(data) {

      // SUCCESS
      // Attach the page data to the scope
      $scope.page = data;

    }, utilitiesFactory.genericHTTPCallbackError);

  });