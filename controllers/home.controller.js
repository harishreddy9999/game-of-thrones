(function() {
    'use strict';

    angular.module('GOTApp').controller('homeController', homeController);

    homeController.$inject = ['GOTDataService'];
    function homeController(GOTDataService) {
        var homeCtrl = this;
        homeCtrl.url = '';
        console.log('controller is initiated');
        homeCtrl.books = function(){
        	homeCtrl.url ="books";
        	GOTDataService.setUrl(homeCtrl.url);
        }
        
        homeCtrl.houses = function(){
        	homeCtrl.url = "houses";
        	GOTDataService.setUrl(homeCtrl.url);
        }
        
        homeCtrl.characters = function(){
            homeCtrl.url = "characters";
            GOTDataService.setUrl(homeCtrl.url);
        }
        
    }
})();
