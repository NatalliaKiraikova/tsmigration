(function () {
    'use strict';

    angular.module('app')
        .controller('DatabaseTableViewController', DatabaseTableViewController);

    /** @ngInject */
    function DatabaseTableViewController($scope, items, SearchStringAndTagsModel, DatabaseTableModel) {
        DatabaseTableModel.clearAll();
        SearchStringAndTagsModel.clearAll();

        $scope.model = DatabaseTableModel;
        $scope.model.items = items.data;
    }
})();
