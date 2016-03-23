(function () {
    'use strict';

    angular
        .module('app')
        .directive('suggestionsList', function () {
            return {
                restrict: 'E',
                templateUrl: "directives/tpl/suggestions-list-tpl.html",
                scope: {
                    labelledby: "@",
                    searchStr: "="
                },
                controller: SuggestionsListDirectiveController
            };
        });
    /** @ngInject */
    function SuggestionsListDirectiveController($scope, SuggestionsService) {

        $scope.status = {
            isopen: false
        };

        $scope.$watch('searchStr', function (newValue, oldValue) {
            var sLength = String(newValue).length;
            if (sLength > 2) {
                SuggestionsService.getSuggestions($scope.searchStr).then(function (res) {
                    $scope.suggestions = res.data;
                    $scope.status.isopen = true;
                }, function (reason) {
                    //error
                    $scope.suggestions = [];
                    $scope.status.isopen = false;
                });
            } else {
                $scope.suggestions = [];
                $scope.status.isopen = false;
            }
        });

        $scope.listClick = function (item) {
            alert("Hello! I am an " + item + "!!");
        };
    }

})();