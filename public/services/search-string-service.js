(function () {
    'use strict';

    angular
        .module('app')
        .factory('SearchStringService', function () {
            return {
                searchString: ''
            };
        });
})();