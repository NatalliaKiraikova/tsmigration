(function () {
    'use strict';

    angular
        .module('app')
        .factory('SearchStringService', function () {
            var factory = {}, searchString, suggestedSearchString;

            factory.setSearchString = function (value) {
                searchString = value;
            };

            factory.getSearchString = function () {
                return searchString;
            };

            factory.setSuggestedSearchString = function(value){
                suggestedSearchString = value;
            };

            factory.getSuggestedSearchString = function () {
                return suggestedSearchString;
            };

            return factory;
        });
})();