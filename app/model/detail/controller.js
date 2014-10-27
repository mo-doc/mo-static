window.MODetail = function($scope,$route,$http){
	// 每个controller都要加上view
	$scope.html = require("./template.html");
	var title = $route.current.params.name || "";

	$http({
		method:"POST",
		url:"/api/component/find",
		data:"title="+title
	}).success(function(data,status,headers,config){
		$scope.data = data.length ? data[0] : {};
	}).error(function(data,status,headers,config){

	});

}

