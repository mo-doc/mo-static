MOapp.compileProvider.directive('moNav', function($http) {
	return {
	    restrict: 'AE',
	    replace: true,
	    templateUrl: "./app/common/template/nav.html",
	    link: function($scope,elem,attr){
			$http({
				method:"GET",
				url:"/dsafdasfad"
			}).success(function(data,status,headers,config){

			}).error(function(data,status,headers,config){
				data={
					util:[
						{
							id:1,
							name:"util-m-floatbar"
						},
						{
							id:2,
							name:"wepp-mobule"
						}
					],
					base:[{
						id:3,
						name:"base-m-css"
					}],
					service:[{
						id:4,
						name:"app-m-server"
					}]
				}
				$scope.data = data;
				$scope.title = "test";
			});		

	    }
	 };
});
