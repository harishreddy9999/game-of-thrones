(function(){
	'use strict';

	angular.module('GOTApp').controller('singlehouseController',singlehouseController);

	singlehouseController.$inject = ['GOTDataService', 'singlehouse'];

	function singlehouseController(GOTDataService,singlehouse){
		var singlehouseCtrl = this;
		singlehouseCtrl.singlehouse = singlehouse;console.log(singlehouse);
		console.log(singlehouseCtrl.singlehouse);
	}console.log('singlehouse controller is initiated');
})();