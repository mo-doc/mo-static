require("../../dep/common/header");

window.MOAdd =['$scope','$route','$http','$rootScope',function($scope,$route,$http,$rootScope){
	$rootScope._loading = false;
	// 每个controller都要加上view
	$scope.html = require("./template.html");  

	$scope.classify="util";	
	$scope.submit = function(){
		$scope.error = "";
		$scope.success = "";

		if(!$scope.title){
			$scope.error = "模块名不能为空";
			return ;
		}else if(!$scope.intro){
			$scope.error = "介绍不能为空";
			return ;
		}else if(!$scope.keyword){
			$scope.error = "关键字不能为空";
			return ;
		}else{
			$http({
				method:"POST",
				url:"/api/component/add",
				data:{
					title:$scope.title||"",
					intro:$scope.intro||"",
					classify:$scope.classify||"",
					keywords:$scope.keyword||""
				},
				transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        	str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
			    },
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data,status,headers,config){
				if(data.code == 200){
					$scope.success = "添加"+$scope.title+"成功";
				}else{
					$scope.error = data.msg || "错误";
				}
			}).error(function(data,status,headers,config){
				
			});

		}
	}
}]

