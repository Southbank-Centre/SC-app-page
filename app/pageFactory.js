'use strict';

/**
 * @ngdoc service
 * @name SC-app-page.factory:pageFactory
 * @factory
 *
 * @description
 * Factory for loading page data into the app
 */

angular.module('SC-app-page')
  .factory('pageFactory', function($http) {

    return {

      /**
       * @ngdoc method
       * @methodOf SC-app-page.factory:pageFactory
       * @name SC-app-page.factory:pageFactory#getPageSingle
       * @returns {undefined} Undefined
       * @param {string} pageId The ID of the page
       * @param {function} callbackSuccess The function to call when the HTTP request succeeds
       * @param {function} callbackError The function to call when the HTTP request fails
       *
       * @description
       * For getting data for a single content page by page ID
       */
      getPage: function(pageAlias, callbackSuccess, callbackError) {

        $http.get('/json/api/content-page/' + pageAlias)
          .success(callbackSuccess)
          .error(callbackError);

      }

    };
    
  });