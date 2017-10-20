(function(){
	'use strict';

	angular.module('GOTApp').controller('charactersController',charactersController);

	charactersController.$inject = ['GOTDataService', 'characters'];

	function charactersController(GOTDataService,characters){
		var charactersCtrl = this;
		charactersCtrl.characters = characters;console.log(characters);
		console.log(charactersCtrl.characters);
	}console.log('characters controller is initiated');
})();