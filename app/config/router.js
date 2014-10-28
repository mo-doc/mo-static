var ENV = window.ENV;

module.exports = [
	{
		"url":"/",
		"css":ENV+"static/css/style.css",
		"name":"index"
	},
	{
		"url":"/detail/:name",
		"css":ENV+"static/css/style.css",
		"name":"detail"
	},
	{
		"url":"/index",
		"css":ENV+"static/css/style.css",
		"name":"index"
	},
	{
		"url":"/search/:keyword",
		"css":ENV+"static/css/search-style.css",
		"name":"search"
	},
	{
		"url":"/add",
		"css":ENV+"static/css/submit.css",
		"name":"add"
	}
	
]