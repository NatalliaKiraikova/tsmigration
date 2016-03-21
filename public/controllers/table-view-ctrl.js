(function () {
    'use strict';

    angular.module('app')
        .controller('TableViewController', TableViewController);

    /** @ngInject */
    function TableViewController($scope, items) {
        if (items.data && items.data.length) {
            $scope.columns = getColumnsArrayFromObject(items.data[0]);
        }
        $scope.items = items.data;
    }

    function getColumnsArrayFromObject(object) {
        var columnArray = [];
        for (var key in object) {
            columnArray.push(key);
        }
        return columnArray;
    }
})();

