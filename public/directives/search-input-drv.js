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

        $scope.$watch('searchStr', function (newValue, oldValue) {
            var sLength = String(newValue).length;
            if (sLength > 2) {
                SuggestionsService.getSuggestions($scope.searchStr).then(function (res) {
                    $scope.suggestions = res.data;
                }, function (reason) {
                    //error
                    $scope.suggestions = [];
                });
            } else {
                $scope.suggestions = [];
            }
        });

        $scope.search = function () {
            //TODO works only for test
            SuggestionsService.getSuggestions($scope.searchStr).then(function (res) {
                $scope.suggestions = res.data;
            });
        };
    }

})();