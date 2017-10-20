(function() {
    'use strict';

    angular.module('GOTApp')
        .component('singlecharacter', {
           templateUrl: 'templates/singlecharacter.component.html',
            bindings: {
                singlecharacter: '<'
            }
        });
})();
