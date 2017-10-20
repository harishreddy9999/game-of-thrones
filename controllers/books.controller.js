(function(){
	'use strict';

	angular.module('GOTApp').controller('booksController',booksController);

	booksController.$inject = ['GOTDataService', 'books'];

	function booksController(GOTDataService,books){
		var booksCtrl = this;
		booksCtrl.books = books;
		console.log(booksCtrl.books);
	}console.log('books controller is initiated');
})();