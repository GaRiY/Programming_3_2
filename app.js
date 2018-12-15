var Wolf = require("./modules/wolf_class");
var Grass = require("./modules/Grass_class");
var Human = require("./modules/Human_class");
var Brownbear = require("./modules/Brownbear_class");
var Cow = require("./modules/Cow_class");

var arr = [];
var xot = [];
var kov = [];
var gayl = [];
var arj = [];
var human = new Human();
var H = 60;//prompt("hight");
var W = 50;//prompt("Wight");

var side = 10;
var kanachQanak = (H * W) * 30 / 100;
var cowQanak = 10;
var gaylQanak = 2;
var arjQanak = 2;

for (var y = 0; y < H; y++) {
  arr[y] = [];
  for (var x = 0; x < W; x++) {
      arr[y].push(0);
  }

}
arr[0][0] = 5;

    //1
    while (kanachQanak > 0) {
      var x = Math.floor(Math.random()* W);
      var y = Math.floor(Math.random()* H);
      if (arr[y][x] == 0) {
          arr[y][x] = 1;
          kanachQanak--;
      }

  }
  //2
  while (cowQanak > 0) {
      var x = Math.floor(Math.random()* W);
      var y = Math.floor(Math.random()* H);
      if (arr[y][x] == 0) {
          arr[y][x] = 2;
          cowQanak--;
      }
  }

  //3
  while (gaylQanak > 0) {
      var x = Math.floor(Math.random()* W);
      var y = Math.floor(Math.random()* H);
      if (arr[y][x] == 0) {
          arr[y][x] = 3;
          gaylQanak--;
      }
  }

  //4
  while (arjQanak > 0) {
      var x = Math.floor(Math.random()* W);
      var y = Math.floor(Math.random()* H);
      if (arr[y][x] == 0) {
          arr[y][x] = 4;
          arjQanak--;
      }

  }

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