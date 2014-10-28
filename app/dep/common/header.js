
MOapp.compileProvider.directive('moHeader', function($location) {
	return {
	    restrict: 'AE',
	    replace: true,
	    template: require("./template/header.html"),
	    link: function($scope,elem,attr){
	    	$scope.search = function($event){
	    		if(parseInt($event.keyCode) == 13 && $scope.searchVal){
	    			$location.path("search/"+($scope.searchVal || ""));
	    		}
	    	}
	    }
	 };
});
