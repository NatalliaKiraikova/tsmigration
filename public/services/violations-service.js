(function () {
    'use strict';

    angular
        .module('app')
        .service('ViolationsService', function ($http) {

            this.getAllViolations = function () {
                var req = {
                    method: 'GET',
                    url: 'http://localhost:3000/violations'
                };
                return $http(req);
            };

        });

})();