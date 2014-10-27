
MOapp.compileProvider.directive('moNav', function($http) {
	return {
	    restrict: 'AE',
	    replace: true,
	    template: require("./template/nav.html"),
	    link: function($scope,elem,attr){
			$http({
				method:"GET",
				url:"/dsafdasfad"
			}).success(function(data,status,headers,config){

			}).error(function(data,status,headers,config){
				var nav=[
					{
					"classify":"util",
					"list":[{
							id:1,
							name:"util-m-floatbar"
						},
						{
							id:2,
							name:"wepp-mobule"
						}
					]},
					{
					"classify":"base",
					"list":[
						{
							id:3,
							name:"base-m-css"
						}
					]},
					{
					"classify":"server",
					"list":[
						{
							id:4,
							name:"app-m-server"
						}
					]}
				];

				$scope.nav = nav;

			});		

	    }
	 };
});
