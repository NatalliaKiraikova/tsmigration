(function () {
    'use strict';

    angular
        .module('app')
        .directive('suggestionsList', function ($compile, SuggestionsService, SearchStringService) {
            return {
                restrict: 'A',
                //require: 'searchInput',
                //controller: SuggestionsListDirectiveController,
                compile: function (element, attrs, transclude) {
                    var template = "<div uib-dropdown is-open='status.isopen'><ul class='list-group' uib-dropdown-menu role='menu'><li ng-repeat='sg in suggestions' role='menuitem' ng-click='listClick(sg)' class='list-group-item'>" + "{{sg}}</li></ul></div>";
                    //aria-labelledby='menu-target'
                    var linkFn = $compile(template);

                    return {
                        post: function postLink(scope, element, attrs) {
                            var el = linkFn(scope);
                            element.children(":first").append(el);

                            scope.status = {
                                isopen: false
                            };

                            scope.$watch(function () {
                                return SearchStringService.getSearchString();
                            }, function (newValue, oldValue) {
                                scope.searchStr = newValue;
                                var sLength = String(scope.searchStr).length;
                                if (sLength > 2) {
                                    SuggestionsService.getSuggestions(scope.searchStr).then(function (res) {
                                        scope.suggestions = res.data;
                                        scope.status.isopen = true;
                                    }, function (reason) {
                                        //error
                                        scope.suggestions = [];
                                        scope.status.isopen = false;
                                    });
                                } else {
                                    scope.suggestions = [];
                                    scope.status.isopen = false;
                                }
                            });

                            scope.listClick = function (item) {
                                alert("Hello! I am an " + item + "!!");
                            };
                        }
                    };
                }
            };
        });

    /** @ngInject */
   /* function SuggestionsListDirectiveController($scope, SuggestionsService) {

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
    }*/
})
();