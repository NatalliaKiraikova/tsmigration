(function () {
    'use strict';

    angular
        .module('app')
        .directive('searchInput', function () {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: "directives/tpl/search-input-tpl.html",
                controller: SearchInputDirectiveController
            };
        });

    /** @ngInject */
    function SearchInputDirectiveController($scope, SearchStringService) {
        $scope.srv = SearchStringService;

        $scope.search = function () {
            //TODO works only for test
        };
    }

})();