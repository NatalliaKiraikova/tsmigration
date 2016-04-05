(function () {
    'use strict';

    angular
        .module('app')
        .factory('SearchStringAndTagsModel', function () {
            return {
                searchString: '',
                selectedSuggestion: '',
                tagsArray: [],

                clearAll: function () {
                    this.searchString = "";
                    this.tagsArray = [];
                    this.selectedSuggestion = "";
                }
            };
        });
})();