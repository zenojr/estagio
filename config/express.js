module.exports = function(){

	var express = require('express');
	var app = express();
	app.set('view engine','ejs');
	app.set('views', './app/views'); //redefine a pasta views dentro da rota
	return app;

}
