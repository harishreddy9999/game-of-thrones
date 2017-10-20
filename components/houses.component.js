(function() {
    'use strict';

    angular.module('GOTApp')
        .component('houses', {
           templateUrl: 'templates/houses.component.html',
            bindings: {
                houses: '<'
            }
        });
})();
