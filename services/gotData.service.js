(function() {
    'use strict';

    angular.module('data').service('GOTDataService', GOTDataService);

    GOTDataService.$inject = ['$q', '$http', 'ApiBasePath'];

    function GOTDataService($q, $http, ApiBasePath) {
        var service = this;
        service.allHouses = [];
        service.allCharacters = [];
    
        service.setUrl = function(entity){
            service.url = entity;
        };

        service.getAllBooks = function() {
            return $http({
                method: "GET",
                url: (ApiBasePath + service.url + '?page=1&pageSize=12')
            }).then(function(response) {
                return response.data;
            },function(error){
                console.log("something went wrong with url call");
            });
        };

        service.getSinglebook = function(bookId){
            return $http({
                method: "GET",
                url: (ApiBasePath + "books" + '/' + bookId)
            }).then(function(response){
                return response.data;
            },function(error){
                console.log("something went wrong in calling singlebook");
            });
        }

        service.getSingleBookLink = function(bookId){
            return $http({
                method: "GET",
                url: (ApiBasePath + "books/" + bookId)
            })
        }

        service.getAllHouses = function(pageId){
            return $http({
                method: "GET",
                url: (ApiBasePath + service.url + '?page=' + pageId + '&pageSize=37')
            }).then(function(response){
                return response.data;
            },function(error){
                console.log("something went wrong with houses url call");
            });
        };

        service.getAllHousesData = function(){
            for(var i=0;i<12;i++){
                service.getAllHouses(i).then(function(response){
                    response.forEach(function(house){
                        service.allHouses.push(house);
                    })
                });
            };console.log(service.allHouses);
            return service.allHouses;
        }

        service.getSinglehouse = function(houseId){
            service.allHouses = [];
            return $http({
               method: "GET",
               url: (ApiBasePath + "houses" + "/" + houseId) 
            }).then(function(response){
                return response.data;
            },function(error){
                console.log('something went wrong in single house call');
            });
        }

        service.getSingleHouseLink = function(houseId){
            return $http({
                method: "GET",
                url: (ApiBasePath + "houses/" + houseId)
            })
        }

        service.getAllCharacters = function(pageId){
            return $http({
                method: "GET",
                url: (ApiBasePath + service.url + '?page=' + pageId + '&pageSize=39')
            }).then(function(response){
                return response.data;
            },function(error){
                console.log("Something went wrong with characters call");
            });
        }

        service.getAllCharactersData = function(){
            for(var i=0; i<55; i++){
                service.getAllCharacters(i).then(function(response){
                    response.forEach(function(character){
                        service.allCharacters.push(character);
                    })
                });
            };console.log(service.allCharacters);
            return service.allCharacters;
        }

        service.getSinglecharacter = function(characterId){
            service.allCharacters = [];
            return $http({
                method: "GET",
                url: (ApiBasePath + "characters" + "/" + characterId)
            }).then(function(response){
                return response.data;
            },function(error){
                console.log('Something went wrong with single character link');
            });
        }

        service.getSingleCharacterLink = function(charId){
            return $http({
                method: "GET",
                url: (ApiBasePath + "characters/" + charId)
            });
            // .then(function(response){
            //     return response.data;
            // },function(error){
            //     console.log("something went wrong in calling single character");
            // })
        }

        // service.getItemsForCategory = function(categoryId){
        // 	return $http({
        // 		method: "GET",
        // 		url: (ApiBasePath + service.url + '/' + categoryId)
        // 	}).then(function(response){
        // 		return response.data;
        // 	});
        // };
    }
})();