(function () {
    'use strict';

    angular
        .module('app')
        .directive('searchInput', function ($compile, $timeout, $window, SearchStringService) {
            return {
                restrict: 'E',
                scope: {
                    searchFn: '&'
                },
                templateUrl: "directives/tpl/search-input-tpl.html",
                link: function ($scope) {
                    $scope.srv = SearchStringService;

                    $scope.tagsArray = [];

                    $scope.$watch(function () {
                        return SearchStringService.selectedSuggestion;
                    }, function (newValue) {
                        if (newValue && newValue.length) {
                            $scope.tagsArray.push(newValue);
                        }
                    });

                    $scope.tagClickHandler = function (tag) {
                        //todo process search
                        $window.alert('item ' + tag);
                    };

                    $scope.tagCloseHandler = function (tag) {
                        var index = $scope.tagsArray.indexOf(tag);
                        $scope.tagsArray.splice(index, 1);
                    };

                    $scope.search = function () {
                        $scope.searchFn({searchStr: $scope.srv.searchString});
                    };

                }
            }
        });

})();