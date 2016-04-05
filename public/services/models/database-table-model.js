(function () {
    'use strict';

    angular
        .module('app')
        .factory('DatabaseTableModel', function (DatabaseService) {
            return {

                items: [],
                filterBySearchStringAndTags: function (tagsArray, searchString) {

                    var self = this;
                    DatabaseService.searchByTags(tagsArray).then(function (data) {
                        var concatedResult = [], searchResultsMap = {};
                        _(data).forEach(function (resObject) {
                            searchResultsMap[resObject.key] = resObject.value;
                            concatedResult = _.concat(concatedResult, resObject.value);
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