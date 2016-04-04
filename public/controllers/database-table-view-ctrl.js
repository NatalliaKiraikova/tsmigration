(function () {
    'use strict';

    angular.module('app')
        .controller('DatabaseTableViewController', DatabaseTableViewController);

    /** @ngInject */
    function DatabaseTableViewController($scope, items, DatabaseService, SearchStringService, $q) {
        $scope.items = items.data;

        //clear SearchStringService
        SearchStringService.searchString = '';
        SearchStringService.selectedSuggestion = {};

        var searchResultsMap = {};
        var filterByString = '';
        var tagsArray = [];
        /*$scope.searchBySubstring = function (searchString) {
         DatabaseService.getDatabaseItemsBySubstring(searchString).then(function (res) {
         $scope.items = res.data;
         }, function (reason) {
         //error
         $scope.items = [];
         });
         };*/

        $scope.filterBySubstring = function (searchString) {
            filterByString = searchString;

            DatabaseService.searchByTags(tagsArray, searchResultsMap).then(function (res) {

                updateTableItems();

                $scope.items = _.filter($scope.items, function (item) {
                    return _.includes(item.name, searchString);
                });

            });
        };

        $scope.searchByCarType = function (carType) {
            if (tagsArray.indexOf(carType) < 0) {
                tagsArray.push(carType);
            }

            /* DatabaseService.getDatabaseItemsByCarType(carType).then(function (res) {
             searchResultsMap[carType] = res.data;
             updateTableItems();
             });*/
        };

        $scope.deleteCarTag = function (carType) {
            if (searchResultsMap[carType]) {
                delete searchResultsMap[carType];
            }
            var index = tagsArray.indexOf(carType);
            tagsArray.splice(index, 1);
            updateTableItems();
        };

        function updateTableItems() {
            var concatedResult = [];
            _.forIn(searchResultsMap, function (value) {
                concatedResult = _.concat(concatedResult, value);
            });

            concatedResult = _.uniqBy(concatedResult, 'guid');
            //TODO process filterByString  here if there is need
            $scope.items = concatedResult;
        }
    }
})();
