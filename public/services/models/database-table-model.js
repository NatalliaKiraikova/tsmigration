(function () {
    'use strict';

    angular
        .module('app')
        .factory('DatabaseTableModel', function (DatabaseService) {
            return {

                items: [],
                filterBySearchStringAndTags: function (tagsArray, searchString) {
                    var searchResultsMap = {};
                    var self = this;
                    DatabaseService.searchByTags(tagsArray, searchResultsMap).then(function (res) {
                        //TODO return searchResultsMap
                        var concatedResult = [];
                        _.forIn(searchResultsMap, function (value) {
                            concatedResult = _.concat(concatedResult, value);
                        });

                        concatedResult = _.uniqBy(concatedResult, 'guid');

                        self.items = _.filter(concatedResult, function (item) {
                            return _.includes(item.name, searchString);
                        });
                    });
                },
                clearAll: function () {
                    this.items = [];
                }
            };
        });
})();