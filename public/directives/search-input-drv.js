(function () {
    'use strict';

    angular
        .module('app')
        .directive('searchInput', function ($compile, $timeout, $window, SearchStringAndTagsModel) {
            return {
                restrict: 'E',
                scope: {
                    searchFn: '&'
                },
                templateUrl: "directives/tpl/search-input-tpl.html",
                link: function ($scope) {
                    $scope.srv = SearchStringAndTagsModel;

                    $scope.tagCloseHandler = function (tag) {
                        var index = SearchStringAndTagsModel.tagsArray.indexOf(tag);
                        SearchStringAndTagsModel.tagsArray.splice(index, 1);
                    };

                    $scope.search = function () {
                        $scope.searchFn({
                            tagsArray: SearchStringAndTagsModel.tagsArray,
                            searchString: SearchStringAndTagsModel.searchString
                        });
                    };

                }
            };
        });

})();