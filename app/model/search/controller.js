require("../../dep/common/header");

window.MOSearch = ['$scope','$route','$http','$rootScope',function($scope,$route,$http,$rootScope){

	$rootScope._loading = false;
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

}]

