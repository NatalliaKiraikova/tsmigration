(function () {
    'use strict';

    angular.module('app')
        .controller('ViolationsCtrl', ViolationsController);

    /** @ngInject */
    function ViolationsController($scope) {
        $scope.violations = [];
    };

})();

