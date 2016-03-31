(function () {
    'use strict';

    angular
        .module('app')
        .directive('tagItem', function () {
            return {
                restrict: 'E',
                scope: {
                    label: '=',
                    itemClickHandler: "&",
                    closeItemHandler: "&"
                },
                replace: true,
                template: "<span class='input-group-addon' ng-click='onItemClick()'>{{label}}  <span class='glyphicon glyphicon-remove-circle' ng-click='onCloseClick($event)'></span></span>",
                controller: TagItemController
            };
        });

    /** @ngInject */
    function TagItemController($scope) {
        $scope.onCloseClick = function ($event) {
            $scope.closeItemHandler({tag: $scope.label});
            $event.stopImmediatePropagation();
        };

        $scope.onItemClick = function () {
            $scope.itemClickHandler({tag: $scope.label});
        };
    }
})();