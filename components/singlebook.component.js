(function() {
    'use strict';

    angular.module('GOTApp')
        .component('singlebook', {
           templateUrl: 'templates/singlebook.component.html',
            bindings: {
                singlebook: '<'
            }
        });
})();
