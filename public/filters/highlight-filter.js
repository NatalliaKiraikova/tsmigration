(function () {
    'use strict';

    angular
        .module('app')
        .filter('highlight', function ($sce) {
            return function (text, search) {
                if (!search) {
                    return $sce.trustAsHtml(text);
                }
                // Regex to simultaneously replace terms
                var regex = new RegExp(search, 'gi');
                return $sce.trustAsHtml(text.replace(regex, '<span class="highlightedText">$&</span>'));
            };
        });
})();