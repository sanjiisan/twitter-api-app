var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write('KO<MUNIKAT'); //write a response to the client
    res.end(); //end the response
}).listen(process.env.PORT || 8080); //the server object listens on port 8080
