(function () {
    'use strict';

    angular.module('app')
        .controller('DatabaseTableViewController', DatabaseTableViewController);

    /** @ngInject */
    function DatabaseTableViewController($scope, items, DatabaseService, SearchStringAndTagsModel) {
        $scope.items = items.data;

        //clear SearchStringAndTagsModel
        SearchStringAndTagsModel.clearAll();

        var searchResultsMap = {};

        $scope.filterBySearchStringAndTags = function (tagsArray, searchString) {
            searchResultsMap = {};

            DatabaseService.searchByTags(tagsArray, searchResultsMap).then(function (res) {
                //TODO return searchResultsMap
                updateTableItems(searchString);
            });
        };

        function updateTableItems(searchString) {
            var concatedResult = [];
            _.forIn(searchResultsMap, function (value) {
                concatedResult = _.concat(concatedResult, value);
            });

            concatedResult = _.uniqBy(concatedResult, 'guid');

            $scope.items = _.filter(concatedResult, function (item) {
                return _.includes(item.name, searchString);
            });

        }
    }
})();
