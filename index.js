// 加载源框架
require("./app/lib/angular");
var loadCss = require("./app/util/loadcss");
var config = require("./app/config/router");
var $ = require("zepto-wepp");

window.MOapp = angular.module('MOapp',[]).
config(['$routeProvider','$compileProvider', function($routeProvider,$compileProvider) {

  MOapp.compileProvider    = $compileProvider;

  $.each(config,function(index,item){
      $routeProvider.when(item.url, {
          templateUrl: './app/model/'+item.name+'/template.html',
          controller:"MO"+item.name.replace(/^./,function(match){return match.toUpperCase()}),
          resolve:{
            delay:function($q,$timeout){


                var $defer = $q.defer();

                var requireNum = parseInt(item.count || 2 ) + (item.js ? item.js.length : 0);

                var loaded = function(){
                    requireNum--;
                    if(!(requireNum > 0)){
                        $timeout($defer.resolve,0);
                    }
                }

                item.css?loadCss(item.css,function(){
                    loaded();
                }):loaded();

                if(item.dep){
                  $.each(item.dep,function(index,it){
                      require.async(it,function(){loaded});
                  })
                }

                item.page ? require.async(item.page.indexOf("/")!=-1 ? item.page : "./app/model/"+item.page+"/controller",function(){loaded();}) :loaded();

                return $defer.promise;

            }
          }
      })
  });
}]);


MOapp.filter('odditems',function(){
    return function(value){
        return 1;
    }
});







