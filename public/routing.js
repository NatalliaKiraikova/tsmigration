(function () {
    'use strict';

    angular.module('app')
        .config(appConfig);

    /** @ngInject */
    function appConfig($stateProvider) {

        $stateProvider.state('home', {
            templateUrl: 'tpl/main-view.html',
            url: '/home',
            pageTitle: 'Home Page'
        }).state('violations', {
            parent: 'home',
            url: '/violations',
            templateUrl: 'tpl/table-view.html',
            controller: 'TableViewController',
            resolve: {
                items: function (ViolationsService) {
                    return ViolationsService.getAllViolations();
                }
            },
            pageTitle: 'Violations Page'
        });/*.state('database', {
                parent: 'home',
                url: '/database',
                templateUrl: 'tpl/database-table-view.html',
                controller: 'DatabaseTableViewController',
                resolve: {
                    items: function (DatabaseService) {
                        return DatabaseService.getAllDatabaseItems();
                    }
                },
                pageTitle: 'Database Page'
            }
        ).state('violations-from-database-by-period', {
                parent: 'home',
                url: '/violations-from-database-by-period',
                templateUrl: 'tpl/table-view.html',
                controller: 'TableViewController',
                resolve: {
                    items: function ($http) {
                        return $http({
                            method: 'GET',
                            url: 'http://localhost:3000/violations-from-database-by-period/?startDate=1456402158936&endDate=1458216558936'
                        });
                    }
                }
            }
        ).state('names-from-violations-by-period', {
            parent: 'home',
            url: '/names-from-violations-by-period',
            templateUrl: 'tpl/table-view.html',
            controller: 'TableViewController',
            resolve: {
                items: function ($http) {
                    return $http({
                        method: 'GET',
                        url: 'http://localhost:3000/names-from-violations-by-period/?startDate=1456402158936&endDate=1458216558936'
                    });
                }
            }
        });*/

    }
})();
