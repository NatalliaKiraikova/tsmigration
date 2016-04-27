(function () {
    'use strict';

    angular
        .module('app')
        .directive('tagItem', function () {
            return {
                restrict: 'E',
                scope: true,
                bindToController: {
                    label: '=',
                    itemClickHandler: "&",
                    closeItemHandler: "&"
                },
                replace: true,
                template: "<span class='input-group-addon' ng-click='onItemClick()'>{{ctrl.label}}  <span class='glyphicon glyphicon-remove-circle' ng-click='onCloseClick($event)'></span></span>",
                controller: TagItemController,
                controllerAs: ctrl
            };
        });

    /** @ngInject */
    function TagItemController($scope) {
        this.onCloseClick = function ($event) {
            $scope.closeItemHandler({tag: $scope.label});
            $event.stopImmediatePropagation();
        };

        this.onItemClick = function () {
            //$scope.itemClickHandler({tag: $scope.label});
        };
    }
})();