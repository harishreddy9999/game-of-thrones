(function(){
	'use strict';
	angular.module('GOTApp').directive('links',links);

	links.$inject = ['GOTDataService'];

	function links(GOTDataService){
		var ddo = {
			scope: {
				link: '@'
			},
			link: function(scope, element, attrs){
				var url = attrs.link;

				if(url.indexOf("/characters/") !== -1){
					var idchar = url.indexOf("/characters/");
					var id = url.substring(idchar + "/characters/".length, url.length);
					GOTDataService.getSingleCharacterLink(id).then(function(response){console.log(response.data);
						element.append("<a class='resLink' href='#!/characters/singlecharacter/" + id + "'>" + response.data.name || response.data.titles[0] || response.data.aliases[0] + "</a>");
						console.log(element);
					});
				}

				if(url.indexOf("/houses/") !== -1){
					var idhous = url.indexOf("/houses/");
					var id = url.substring(idhous + "/houses/".length, url.length);
					GOTDataService.getSingleHouseLink(id).then(function(response){console.log(response.data);
						element.append("<a class='resLink' href='#!/houses/singlehouse/" + id + "'>" + response.data.name + "</a>");
						console.log(element);
					})
				}

				if(url.indexOf("/books/") !== -1){
					var idbook = url.indexOf("/books/");
					var id = url.substring(idbook + "/books/".length, url.length);
					GOTDataService.getSingleBookLink(id).then(function(response){console.log(response.data);
						element.append("<a class='resLink' href='#!/books/singlebook/" + id + "'>" + response.data.name + "</a>");
					})
				}
			}
		};
		return ddo;
	}
})();