(function () {
    'use strict';

    angular
        .module('app')
        .service('DatabaseService', function ($http) {

            var generalURL = 'http://localhost:3000/database';

            this.getAllDatabaseItems = function () {
                var req = {
                    method: 'GET',
                    url: generalURL
                };
                return $http(req);
            };


            this.getDatabaseItemsBySubstring = function (searchString) {
                var req = {
                    method: 'GET',
                    url: generalURL + '/items-by-substring',
                    params: {
                        str: searchString
                    }
                };
                return $http(req);
            };

        });

})();
