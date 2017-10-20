(function() {
    'use strict';

    angular.module('GOTApp')
        .component('singlehouse', {
           templateUrl: 'templates/singlehouse.component.html',
            bindings: {
                singlehouse: '<'
            }
        });
})();
