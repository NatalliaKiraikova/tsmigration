(function () {
    'use strict';

    angular
        .module('app')
        .factory('SearchStringService', function () {
            var factory = {}, searchString;

            factory.setSearchString = function (value) {
                searchString = value;
            };

            factory.getSearchString = function () {
                return searchString;
            };

            return factory;
        });
})();