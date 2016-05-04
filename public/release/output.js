(function () {
    'use strict';
    angular.module('app')
        .controller('TableViewController', TableViewController);
    /** @ngInject */
    function TableViewController($scope, items) {
        $scope.items = items.data;
    }
})();
(function () {
    'use strict';
    angular
        .module('app')
        .directive('simpleTable', function () {
        return {
            restrict: 'E',
            scope: {
                items: '='
            },
            templateUrl: "directives/tpl/simple-table-tpl.html",
            controller: SimpleTableController
        };
    });
    /** @ngInject */
    function SimpleTableController($scope) {
        if ($scope.items && $scope.items.length) {
            $scope.columns = getColumnsArrayFromObject($scope.items[0]);
        }
        function getColumnsArrayFromObject(object) {
            var columnArray = [];
            for (var key in object) {
                columnArray.push(key);
            }
            return columnArray;
        }
    }
})();
