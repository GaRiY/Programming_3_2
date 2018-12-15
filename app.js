var wolf = require("./modules/wolf_class");
var grass = require("./modules/Grass_class");
var human = require("./modules/Human_class");
var brownbear = require("./modules/Brownbear_class");
var cow = require("./modules/Cow_class");

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

io.on('connection', function (socket) {
  for(var i in messages) {
    io.sockets.emit("display message", messages[i]);
  }
  socket.on("send message", function (data) {
      messages.push(data);
      io.sockets.emit("display message", data);
  });
});