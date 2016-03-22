(function () {
    'use strict';

    angular
        .module('app')
        .directive('searchInput', function () {
            return {
                restrict: 'E',
                templateUrl: "directives/tpl/search-input-tpl.html",
                controller: SearchInputDirectiveController
            };
        });

    /** @ngInject */
    function SearchInputDirectiveController($scope, SuggestionsService) {
        $scope.searchStr = '';

        $scope.search = function () {
            SuggestionsService.getSuggestions($scope.searchStr).then(function (res) {
                //TODO works only for test
                $scope.suggestions = res.data;
            });
        };
    }

})();