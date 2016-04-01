(function () {
    'use strict';

    angular.module('app')
        .controller('DatabaseTableViewController', DatabaseTableViewController);

    /** @ngInject */
    function DatabaseTableViewController($scope, items, DatabaseService, SearchStringService) {
        $scope.items = items.data;

        //clear SearchStringService
        SearchStringService.searchString = '';
        SearchStringService.selectedSuggestion = {};

        var searchResultsMap = {};

        $scope.searchBySubstring = function (searchString) {
            DatabaseService.getDatabaseItemsBySubstring(searchString).then(function (res) {
                $scope.items = res.data;
            }, function (reason) {
                //error
                $scope.items = [];
            });
        };

        $scope.filterBySubstring = function (searchString) {
            //TODO filter $scope.items
        };

        $scope.searchByCarType = function (carType) {
            if (searchResultsMap[carType]) {
                //this carType was processed earlier
                return;
            }

            DatabaseService.getDatabaseItemsByCarType(carType).then(function (res) {
                searchResultsMap[carType] = res.data;
                var concatedResult = [];
                _.forIn(searchResultsMap, function (value) {
                    concatedResult = _.concat(concatedResult, value);
                });
                $scope.items = _.uniqBy(concatedResult, 'guid');
            });
        }
    }
})();
