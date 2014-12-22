require("../../dep/common/header");

window.MOAdd =['$scope','$route','$http','$rootScope',function($scope,$route,$http,$rootScope){
	$rootScope._loading = false;
	// 每个controller都要加上view
	$scope.html = require("./template.html");  

	$scope.classify="util";	
	$scope.submit = function(){
		$scope.error = "";
		$scope.success = "";
		debugger;
		try{
			_pkg = $scope.package ? JSON.parse($scope.package) : {};
		}catch(e){
			$scope.error = "解析package文件出错";
			return ;
		}

		if(!_pkg.name){
			$scope.error = "name不能为空";
			return ;
		}else if(!$scope.intro){
			$scope.error = "介绍不能为空";
			return ;
		}else if(!_pkg.version){
			$scope.error = "version不能为空";
			return ;
		}else if(!_pkg.keywords){
			$scope.error = "关键字不能为空";
			return ;
		}else{
			$http({
				method:"POST",
				url:"/api/component/add",
				data:{
					intro:$scope.intro||"",
					package:$scope.package
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
					$scope.success = "添加"+_pkg.name+"成功";
				}else{
					$scope.error = data.msg || "错误";
				}
			}).error(function(data,status,headers,config){
				
			});

		}
	}
}]

