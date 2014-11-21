require("../../dep/common/header");


window.MODelete =['$scope','$route','$http',"$rootScope", function($scope,$route,$http,$rootScope){
	// 每个controller都要加上view
	$rootScope._loading = false;
	$scope.html = require("./template.html");

	$http({
		method:"POST",
		url:"/api/component/find"
	}).success(function(data,status,headers,config){
		$scope.data = data;
	}).error(function(data,status,headers,config){

	});

	$scope.remove = function(title,index){
		var _confirm = window.confirm("确定删除"+title+"?");
		if(_confirm){
			$http({
				method:"POST",
				url:"/api/component/remove",
				data:"title="+title
			}).success(function(data,status,headers,config){
				if(data.code == 200){
					$scope.data.splice(index,1);
				}
			}).error(function(data,status,headers,config){

			});
		}
	}

}]

