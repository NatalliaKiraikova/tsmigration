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
    function SearchInputDirectiveController($scope) {
        $scope.searchStr = '';

        $scope.search = function () {
            //TODO works only for test
            /*SuggestionsService.getSuggestions($scope.searchStr).then(function (res) {
                $scope.suggestions = res.data;
            });*/
        };


    }

})();