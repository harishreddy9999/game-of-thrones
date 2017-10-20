(function() {
    'use strict';

    angular.module('GOTApp')
        .component('books', {
           templateUrl: 'templates/books.component.html',
            bindings: {
                books: '<'
            }
        });
})();
