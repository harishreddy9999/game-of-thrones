(function() {
    'use strict';

    angular.module('GOTApp')
        .component('characters', {
           templateUrl: 'templates/characters.component.html',
            bindings: {
                characters: '<'
            }
        });
})();
