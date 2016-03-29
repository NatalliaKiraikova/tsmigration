(function () {
    'use strict';

    angular
        .module('app')
        .directive('searchInput', function () {
            return {
                restrict: 'E',
                scope: {
                    searchFn: '&'
                },
                templateUrl: "directives/tpl/search-input-tpl.html",
                controller: SearchInputDirectiveController
            };
        });

    /** @ngInject */
    function SearchInputDirectiveController($scope, SearchStringService) {
        $scope.srv = SearchStringService;

        $scope.search = function () {
            $scope.searchFn({searchStr: $scope.srv.searchString});
        };
    }

})();