(function () {
    'use strict';

    angular
        .module('app')
        .service('DatabaseService', function ($http, $q) {
            var self = this;
            var generalURL = 'http://localhost:3000/database';

            self.getAllDatabaseItems = function () {
                var req = {
                    method: 'GET',
                    url: generalURL
                };
                return $http(req);
            };


            self.getDatabaseItemsBySubstring = function (searchString) {
                var req = {
                    method: 'GET',
                    url: generalURL + '/items-by-substring',
                    params: {
                        str: searchString
                    }
                };
                return $http(req);
            };

            self.getDatabaseItemsByCarType = function (carType) {
                var req = {
                    method: 'GET',
                    url: generalURL + '/items-by-car-type',
                    params: {
                        carType: carType
                    }
                };
                return $http(req);
            };

            self.searchByTags = function (tagsArray, searchResultsMap) {

                var promises = [];

                angular.forEach(tagsArray, function (carType) {

                    var promise = self.getDatabaseItemsByCarType(carType).then(function (res) {
                        //console.log(res, 'carType', carType);
                        searchResultsMap[carType] = res.data;
                    });

                    promises.push(promise);

                });

                return $q.all(promises);
            }

        });

})();
