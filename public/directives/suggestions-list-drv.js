(function () {
    'use strict';

    angular
        .module('app')
        .directive('suggestionsList', function () {
            return {
                restrict: 'E',
                templateUrl: "directives/tpl/suggestions-list-tpl.html",
                controller: SuggestionsListDirectiveController
            };
        });
    /** @ngInject */
    function SuggestionsListDirectiveController($scope) {
        $scope.listClick = function (item) {
            alert("Hello! I am an " + item + "!!");
        };
    }

})();