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
var stat = {
    "Wolf": 0,
    "Grass": 0,
    "Brownbear": 0,
    "Cow": 0
}


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("./public"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

arr = require("./modules/MatrixCreator");

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

setInterval(function () {

    var newClassCreating = human.check(xot, kov, gayl, arj, arr, W, H);
    if (typeof (newClassCreating) != "undefined") {
        if (newClassCreating[2] == "Grass") {
            xot.push(new Grass(newClassCreating[0], newClassCreating[1], 1));
        }
        else if (newClassCreating[2] == "Cow") {
            kov.push(new Cow(newClassCreating[0], newClassCreating[1], 2));
        }
        else if (newClassCreating[2] == "Wolf") {
            gayl.push(new Wolf(newClassCreating[0], newClassCreating[1], 3));
        }
        else if (newClassCreating[2] == "Brownbear") {
            arj.push(new Brownbear(newClassCreating[0], newClassCreating[1], 4));
        }
    }
    arr[0][0] = 5;

    for (i in arj) {
        arj[i].eat(i, arr, xot, kov, gayl, arj);
    }
    for (i in gayl) {
        gayl[i].eat(i, arr, kov, gayl);
    }
    for (i in kov) {
        kov[i].eat(i, arr, xot, kov);
    }
    for (i in xot) {
        xot[i].multiplying(arr, xot);
    }

    io.sockets.emit("matrix", arr);

    stat.Wolf = gayl.length;
    stat.Grass = xot.length;
    stat.Brownbear = arj.length;
    stat.Cow = kov.length;
    
    var myJSON = JSON.stringify(stat);
    fs.writeFileSync("stat.json", myJSON);
}, 1000)

