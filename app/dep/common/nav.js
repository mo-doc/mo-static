require("../filter/classify");

MOapp.compileProvider.directive('moNav', function($http,$compile) {
	return {
	    restrict: 'AE',
	    replace: true,
	    template: require("./template/nav.html"),
	    link: function($scope,elem,attr){
			$http({
				method:"GET",
				url:"/api/component/listbyclassify"
			}).success(function(data,status,headers,config){
				$scope.nav = data || [];
			}).error(function(data,status,headers,config){
				
			});		

	    }
	 };
});
