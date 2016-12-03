//console.log('it works'); //check
//in bash run: npm install express -> webserver package manager for sharing code & downloads node_module files
//CLOUD9: when running server.js, can't run index.html otherwise process will end!!!
//in bash run: npm install socket.io -> another 3rd party Node module for using Web Sockets
//socket.io -> need for real time messaging

//express function 
var express = require('express');
var app = express(); //object 

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

io.on('connection', function(socket) {
    //whenever server receives a message, send 
    socket.on('message', function(msg) {
        io.emit('message',msg);
    }
    );
}
);

server.listen(process.env.PORT, process.env.IP, function() {
    var addr = server.address();
    console.log("Chat server running", addr.address + ":" + addr.port);
});

