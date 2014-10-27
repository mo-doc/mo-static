module.exports = function(url,callback){
    var node = document.createElement('link');
    node.href = url;
    node.rel = 'stylesheet';

    var assetOnload = function(node,cb){
        setTimeout(function(){
            cb.call(node);
        }, 0);
    }

    callback && assetOnload(node, callback);

    // insert new CSS in the end of `<head>` to maintain priority
    document.getElementsByTagName('head')[0].appendChild(node);
}
