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
    "Cow": 0,
    "Died_Wolfs": 0,
    "Eated_Grass": 0,
    "Died_Brownbears": 0,
    "Died_Cows": 0,
    "Added_Wolfs": 0,
    "Added_Grass": 0,
    "Added_Brownbears": 0,
    "Added_Cows": 0
}
var length = [];
var seasons = ["Spring", "Summer", "Autumn", "Winter"];
var currentSeason = seasons[0];
var NumberForSeasonChanging = 0;

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

length.push(gayl.length);
length.push(xot.length);
length.push(arj.length);
length.push(kov.length);

setInterval(function () {
    if (currentSeason != seasons[3]) {
       human.check(xot, kov, gayl, arj, arr, W, H, stat);
        arr[0][0] = 5;

        for (i in arj) {
            arj[i].eat(i, arr, xot, kov, gayl, arj, stat, currentSeason);
        }

    }
    else {
        for (i in arj) {
            arj[i].ttd -= 1;
        }
        arr[0][0] = 10;
    }
    for (i in gayl) {
        gayl[i].eat(i, arr, kov, gayl, stat, currentSeason);
    }

    for (i in kov) {
        kov[i].eat(i, arr, xot, kov, stat, currentSeason);

    }

    for (i in xot) {
        xot[i].multiplying(arr, xot, stat, currentSeason);
    }

    //stat = [Wolf,Grass,Brownbear,Cow,Died_Wolfs,Eated_Grass,Died_Brownbears,Died_Cows]
    stat.Wolf = gayl.length;
    stat.Grass = xot.length;
    stat.Brownbear = arj.length;
    stat.Cow = kov.length;

    //Season changing
    if (NumberForSeasonChanging == 10) {
        currentSeason = seasons[1];
    }
    else if (NumberForSeasonChanging == 20) {
        currentSeason = seasons[2];
    }
    else if (NumberForSeasonChanging == 30) {
        currentSeason = seasons[3];
    }
    else if (NumberForSeasonChanging >= 40) {
        NumberForSeasonChanging = 0;
        currentSeason = seasons[0];
    }
    NumberForSeasonChanging += 1;
    //Season changing (end)

    var myJSON = JSON.stringify(stat);
    fs.writeFileSync("stat.json", myJSON);

    io.sockets.emit("matrix", [arr, stat, currentSeason]);
}, 1000)

