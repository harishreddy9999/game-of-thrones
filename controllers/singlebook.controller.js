(function(){
	'use strict';

	angular.module('GOTApp').controller('singlebookController',singlebookController);

	singlebookController.$inject = ['GOTDataService', 'singlebook'];

	function singlebookController(GOTDataService,singlebook){
		var singlebookCtrl = this;
		singlebookCtrl.singlebook = singlebook;console.log(singlebook);
		console.log(singlebookCtrl.singlebook);
	}console.log('singlebook controller is initiated');
})();