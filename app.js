var app = require('./config/express')(); //chama o express do arquivo config/express.js
var rotaLogin = require('./app/routes/rotaLogin')(app);


app.listen(3000, function(){
	console.log('Hello Friend... leave me here.')
});