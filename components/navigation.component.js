(function() {
    'use strict';

    angular.module('GOTApp')
        .component('navigation', {
           templateUrl: 'templates/navigation.component.html',
            bindings: {
                navigation: '<'
            }
        });
})();
