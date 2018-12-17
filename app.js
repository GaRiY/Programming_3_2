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
var H = 60;
var W = 50;

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

  for (var y = 0; y < arr.length; y++) {
    for (var x = 0; x < arr[y].length; x++) {
        if (arr[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            xot.push(gr);
        }
        if (arr[y][x] == 2) {
            var cw = new Cow(x, y, 2);
            kov.push(cw);
        }
        if (arr[y][x] == 3) {
            var gy = new Wolf(x, y, 3);
            gayl.push(gy);
        }
        if (arr[y][x] == 4) {
            var ar = new Brownbear(x, y, 4);
            arj.push(ar);
        }
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

setInterval(function(){
  
  var newClassCreatin = human.check(xot,kov,gayl,arj,arr);
  if(typeof(newClassCreatin) != "undefined"){
    if(newClassCreatin[2] == "Grass"){
      xot.push(new Grass(newClassCreatin[0],newClassCreatin[1],1));
    }
    else if(newClassCreatin[2] == "Cow"){
      kov.push(new Cow(newClassCreatin[0],newClassCreatin[1],2));
    }
    else if(newClassCreatin[2] == "Wolf"){
      gayl.push(new Wolf(newClassCreatin[0],newClassCreatin[1],3));
    }
    else if(newClassCreatin[2] == "Brownbear"){
      arj.push(new Brownbear(newClassCreatin[0],newClassCreatin[1],4));
    }
}
  for (i in arj) {
      arj[i].eat(i,arr,xot,kov,gayl);
  }
  for (i in gayl) {
      gayl[i].eat(i,arr);
  }
  for (i in kov) {
      kov[i].eat(i,arr);
  }
  for (i in xot) {
      xot[i].multiplying(arr);
  } 

  io.sockets.emit("matrix", arr);

}, 1000)

