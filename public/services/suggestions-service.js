(function () {
    'use strict';

    angular
        .module('app')
        .service('SuggestionsService', function ($http) {
            this.getSuggestions = function (searchString) {
                var req = {
                    method: 'GET',
                    url: 'http://localhost:3000/suggestions-from-database-by-str',
                    params: {
                        str: searchString
                    }
                };

                return $http(req);
            };
        });

})();