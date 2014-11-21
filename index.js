// 加载源框架
require("./app/lib/angular");
require("./app/lib/router");
// loadcss js
var loadCss = require("./app/util/loadcss");
// router
var config = require("./app/config/router");
// 异步加载css缓存
var CSS_cache = [];

// 路径配置
window.MOapp = angular.module('MOapp',['ngRoute']).
config(['$routeProvider','$compileProvider','$filterProvider','$httpProvider', function($routeProvider,$compileProvider,$filterProvider,$httpProvider) {

  // post设为表单提交
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  // lazyload directive
  MOapp.compileProvider    = $compileProvider;

  // lazyload filter
  MOapp.filterProvider = $filterProvider;

  // roouter config
 angular.forEach(config,function(item,index){
      $routeProvider.when(item.url, {
          controller:"MO"+item.name.replace(/^./,function(match){return match.toUpperCase()}),
          // before display view, load controller and dep,css
          template:'<div compile="html"></div>',
          resolve:{
            delay:function($q,$timeout,$route){
                var $defer = $q.defer();

                var requireNum = parseInt(item.count || 2 );
                
                var loaded = function(){
                    requireNum--;
                    if(!(requireNum > 0)){
                        $timeout($defer.resolve,0);
                    }
                }
                // 加载过一次css不再加载
                if(item.css&&CSS_cache.indexOf(item.css) == -1){
                    loadCss(item.css,function(){
                      CSS_cache.push(item.css)
                      loaded();
                    });
                }else{
                    loaded();
                }

                item.name ? require.async(item.name.indexOf("/")!=-1 ? item.page : "./app/model/"+item.name+"/controller",function(template){
                  loaded();
                }) :loaded();
                
                return $defer.promise;
            }
          }
      })
  });

}]).run(function($rootScope) {
    //loading 
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        $rootScope._loading = '<div class="loading"></div>';
    });
});


// 模板解析
MOapp.directive('compile', function($compile) {
  return function(scope, element, attrs) {
    scope.$watch(
      function(scope) {
        // watch the 'compile' expression for changes
        return scope.$eval(attrs.compile);
      },
      function(value) {
        element.html(value);
        $compile(element.contents())(scope);
      }
    );
  };
});







