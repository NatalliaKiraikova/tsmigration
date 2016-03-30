(function () {
    'use strict';

    angular
        .module('app')
        .directive('suggestionItem', function () {
            return {
                restrict: 'E',
                template: "<span ng-class='getClass(suggestion.type)'></span>  {{suggestion.value}}",
                scope: {
                    suggestion: '='
                },
                controller: SuggestionsListDirectiveController
            };

            /** @ngInject */
            function SuggestionsListDirectiveController($scope) {
                var iconMap = {
                    user: 'user',
                    car: 'heart'
                };

                $scope.getClass = function (iconType) {
                    var classString = 'glyphicon glyphicon-' + iconMap[iconType];
                    return classString;
                };
            }
        });
})();