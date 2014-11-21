require("../../dep/common/header");
require("../../dep/common/nav");
window.MOIndex = ["$scope","$rootScope",function($scope,$rootScope){
	// 每个controller都要加上view
	$rootScope._loading = false;
	$scope.html = require("./template.html");
}];

// module.exports = require("./template.html");