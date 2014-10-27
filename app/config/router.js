var ENV = window.ENV;

module.exports = [
	{
		"url":"/detail/:name",
		"css":ENV+"static/css/style.css",
		"name":"detail",
		"dep":['./app/dep/common/nav','./app/dep/common/header']
	},
	{
		"url":"/index",
		"css":ENV+"static/css/style.css",
		"name":"index",
		"dep":['./app/dep/common/nav','./app/dep/common/header']
	},
	{
		"url":"/search/:keyword",
		"css":ENV+"static/css/search-style.css",
		"name":"search",
		"dep":['./app/dep/common/header']
	},
	{
		"url":"/add",
		"css":ENV+"static/css/submit.css",
		"name":"add",
		"dep":['./app/dep/common/header']
	}
	
]