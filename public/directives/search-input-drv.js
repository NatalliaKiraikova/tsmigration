(function () {
    'use strict';

    angular
        .module('app')
        .directive('searchInput', function ($compile, $timeout, $window, SearchStringService) {
            return {
                restrict: 'E',
                scope: {
                    searchFn: '&',
                    searchByCarType: '&'
                },
                templateUrl: "directives/tpl/search-input-tpl.html",
                link: function ($scope) {
                    $scope.srv = SearchStringService;

                    $scope.tagsArray = [];

                    $scope.$watch(function () {
                        return SearchStringService.selectedSuggestion;
                    }, function (newValue) {
                        var searchValue = newValue.value;
                        if (newValue && searchValue.length) {
                            $scope.tagsArray.push(searchValue);
                            if (newValue.type == 'car') {
                                $scope.searchByCarType({carType: searchValue});
                            }
                        }
                    });

                    $scope.tagCloseHandler = function (tag) {
                        var index = $scope.tagsArray.indexOf(tag);
                        $scope.tagsArray.splice(index, 1);
                    };

                    $scope.search = function () {
                        $scope.searchFn({searchStr: $scope.srv.searchString});
                    };

                }
            };
        });

})();