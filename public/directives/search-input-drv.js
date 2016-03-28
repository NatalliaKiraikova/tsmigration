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
        $scope.searchStr = '';

        $scope.searchStringChanged = function () {
            SearchStringService.setSearchString($scope.searchStr);
        };

        $scope.$watch(function () {
            return SearchStringService.getSuggestedSearchString();
        }, function (newValue) {
            $scope.searchStr = newValue;
        });

        $scope.search = function () {
            //TODO works only for test
        };
    }

})();