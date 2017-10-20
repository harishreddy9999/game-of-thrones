(function(){
	'use strict';

	angular.module('GOTApp').controller('housesController',housesController);

	housesController.$inject = ['GOTDataService', 'houses'];

	function housesController(GOTDataService,houses){
		var housesCtrl = this;
		housesCtrl.houses = houses;

		housesCtrl.regexVal = function(url){
			console.log(url.match(/(\d+)/)[0]);
			return url.match(/(\d+)/)[0];
		}

		console.log(houses);
		console.log(housesCtrl.houses);
	}console.log('houses controller is initiated');
})();