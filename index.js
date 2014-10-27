// 加载源框架
require("./app/lib/angular");
require("./app/lib/router");
var loadCss = require("./app/util/loadcss");
var config = require("./app/config/router");

// page template cache
var _Template = {};


window.MOapp = angular.module('MOapp',['ngRoute']).
config(['$routeProvider','$compileProvider','$filterProvider', function($routeProvider,$compileProvider,$filterProvider) {

  // lazyload directive
  MOapp.compileProvider    = $compileProvider;

  // lazyload filter
  MOapp.filterProvider = $filterProvider;


  // roouter config
 angular.forEach(config,function(item,index){
      $routeProvider.when(item.url, {
          controller:"MO"+item.name.replace(/^./,function(match){return match.toUpperCase()}),
          // before display view, load controller and dep,css
          templateUrl:'./app/model/'+item.name+'/template.html',
          resolve:{
            delay:function($q,$timeout,$route){
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
                  angular.forEach(item.dep,function(it,index){
                      require.async(it,function(){loaded});
                  })
                }
                item.page ? require.async(item.page.indexOf("/")!=-1 ? item.page : "./app/model/"+item.page+"/controller",function(template){
                  $route.routes["/index"].$template= template;                  
                  loaded();
                }) :loaded();
                
                return $defer.promise;
            }
          }
      })
  });
}]);








