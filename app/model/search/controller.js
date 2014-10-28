window.MOSearch = function($scope,$route,$http){
	// 每个controller都要加上view
	$scope.html = require("./template.html");
	var keyword = $route.current.params.keyword || "";
	$http({
		method:"GET",
		url:"/api/component/keywordfilter",
		params:{
			keyword:keyword || ""
		}
	}).success(function(data,status,headers,config){
		$scope.data = data;
	}).error(function(data,status,headers,config){

	});

}

