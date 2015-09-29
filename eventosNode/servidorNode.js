var http = require('http')

var server = http.createServer(function(request,response){
	response.write("<h1>Hola!</h1><p>esto es un servidor NodeJS</p>");
	response.end();

});

server.listen(3000);

