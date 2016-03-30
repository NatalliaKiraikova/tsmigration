(function () {
    'use strict';

    angular
        .module('app')
        .directive('suggestionItem', function () {
            return {
                restrict: 'E',
                template: "<span ng-class='getClass(suggestion)'></span>  {{suggestion.value}}",
                scope: {
                    suggestion: '='
                },
                controller: SuggestionsListDirectiveController
            };

            /** @ngInject */
            function SuggestionsListDirectiveController($scope) {
                var iconMap = {
                    user: 'user',
                    car: 'heart',
                    vw: 'random',
                    mercedes: 'thumbs-up',
                    bmw: 'fire',
                    honda: 'plane'
                };

                $scope.getClass = function (suggestion) {
                    var classString = 'glyphicon glyphicon-';

                    if(suggestion.type == 'car'){
                        classString += iconMap[suggestion.value];
                    }else{
                        classString += iconMap[suggestion.type];
                    }

                    return classString;
                };
            }
        });
})();