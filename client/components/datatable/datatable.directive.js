'use strict';
const angular = require('angular');
import 'datatables.net';
import 'datatables.net-bs';

export default angular.module('mjsApp.datatable', [])
  .directive('datatable', function($timeout) {
    return {
      restrict: 'A',
      scope: {
        dtReady: '=',
        dtConfig: '='
      },
      link: function(scope, element, attrs) {
        scope.$watch('dtReady', function(newValue) {
          if(newValue) {
            $timeout(() => $(element).DataTable(scope.dtConfig));

            /** For debugging purpose compare quantity of tr's in tbody **/
            // console.log($(element).children('tbody').children('tr').length);
          }
        });
      }
    };
  })
  .name;