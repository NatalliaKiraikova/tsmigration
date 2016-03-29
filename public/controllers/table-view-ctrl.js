(function () {
    'use strict';

    angular.module('app')
        .controller('TableViewController', TableViewController);

    /** @ngInject */
    function TableViewController($scope, items) {
        $scope.items = items.data;
    }
})();

