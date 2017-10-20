(function(){
	'use strict';

	angular.module('GOTApp').config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

	function RoutesConfig($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.template.html',
				controller: 'homeController as homeCtrl'
			})
			.state('books', {
				url: '/books',
				templateUrl: 'templates/books.template.html',
				controller: 'booksController as booksCtrl',
				resolve: {
					books: ['GOTDataService', function(GOTDataService){
						return GOTDataService.getAllBooks();
					}]
				}
			})
			.state('singlebook', {
				url: '/books/singlebook/{bookId}',
				templateUrl: 'templates/singlebook.template.html',
				controller: 'singlebookController as singlebookCtrl',
				params: {
					bookId: null
				},
				resolve: {
					singlebook: ['$stateParams','GOTDataService',function($stateParams,GOTDataService){
						return GOTDataService.getSinglebook($stateParams.bookId);
					}]
				}
			})
			.state('houses', {
				url: '/houses',
				templateUrl: 'templates/houses.template.html',
				controller: 'housesController as housesCtrl',
				resolve: {
					houses: ['GOTDataService', function(GOTDataService){
						return GOTDataService.getAllHousesData();
					}]
				}
			})
			.state('singlehouse', {
				url: '/houses/singlehouse/{houseId}',
				templateUrl: 'templates/singlehouse.template.html',
				controller: 'singlehouseController as singlehouseCtrl',
				params: {
					houseId: null
				},
				resolve: {
					singlehouse: ['$stateParams','GOTDataService',function($stateParams,GOTDataService){
						return GOTDataService.getSinglehouse($stateParams.houseId);
					}]
				}
			})
			.state('characters', {
				url: '/characters',
				templateUrl: 'templates/characters.template.html',
				controller: 'charactersController as charactersCtrl',
				resolve: {
					characters: ['GOTDataService',function(GOTDataService){
						return GOTDataService.getAllCharactersData();
					}]
				}
			})
			.state('singlecharacter', {
				url: '/characters/singlecharacter/{characterId}',
				templateUrl: 'templates/singlecharacter.template.html',
				controller: 'singlecharacterController as singlecharacterCtrl',
				params: {
					characterId: null
				},
				resolve: {
					singlecharacter: ['$stateParams','GOTDataService',function($stateParams,GOTDataService){
						return GOTDataService.getSinglecharacter($stateParams.characterId);
					}]
				}
			});
	}
})();