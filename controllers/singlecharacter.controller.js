 (function(){
	'use strict';

	angular.module('GOTApp').controller('singlecharacterController',singlecharacterController);

	singlecharacterController.$inject = ['GOTDataService', 'singlecharacter'];

	function singlecharacterController(GOTDataService,singlecharacter){
		var singlecharacterCtrl = this;
		singlecharacterCtrl.singlecharacter = singlecharacter;console.log(singlecharacter);
		console.log(singlecharacterCtrl.singlecharacter);
	}console.log('singlecharacter controller is initiated');
})();