(function () {
    'use strict';

    angular
        .module('app')
        .directive('suggestionsList', function ($compile, SuggestionsService, SearchStringService) {
            return {
                restrict: 'E',
                scope: {},
                compile: function () {
                    var template = "<div uib-dropdown is-open='status.isopen'><ul class='list-group' uib-dropdown-menu role='menu'><li ng-repeat='sg in suggestions' role='menuitem' ng-click='listClick(sg)' class='list-group-item'>" + "{{sg}}</li></ul></div>";
                    var linkFn = $compile(template);

                    return {
                        post: function postLink(scope, element) {
                            scope.status = {
                                isopen: false
                            };

                            scope.$watch(function () {
                                return SearchStringService.getSearchString();
                            }, function (newValue) {
                                if (newValue && newValue.length > 2) {
                                    if (!scope.inputTarget) {
                                        scope.inputTarget = angular.element(document.querySelector('.input-group'));
                                        var el = linkFn(scope);
                                        element.append(el);

                                    }
                                    SuggestionsService.getSuggestions(newValue).then(function (res) {
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
})
();