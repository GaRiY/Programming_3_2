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
var eatedCows = 0;
var eatedWolfs = 0;
var eatedGrass = 0;

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
            var varForStats1 = arj[i].eat(i, arr, xot, kov, gayl, arj);
            if (varForStats1 == "Wolf"){
                eatedWolfs++;
            }
            else if (varForStats1 == "Cow"){
                eatedCows++;
            }
            else if (varForStats1 == "Grass"){
                eatedGrass++;
            }
            varForStats1 = 0;
        }
        stat.Died_Wolfs += eatedWolfs;
        stat.Died_Cows += eatedCows;
        stat.Eated_Grass += eatedGrass;
        eatedWolfs = 0;
        eatedCows = 0;
        eatedGrass = 0;
        length[0] = gayl.length;
        length[3] = kov.length;
        length[1] = xot.length;

    }
    else {
        for (i in arj) {
            arj[i].ttd -= 1;
        }
    }
    for (i in gayl) {
        gayl[i].eat(i, arr, kov, gayl,eatedCows);
    }
    stat.Died_Cows += eatedCows;
    eatedCows = 0;
    length[3] = kov.length;

    for (i in kov) {
        var varForStats3 = kov[i].eat(i, arr, xot, kov);
        if (varForStats3 == "Grass"){
            eatedGrass++;
        }
        varForStats3 = 0;
    }
    stat.Eated_Grass += eatedGrass;
    eatedGrass = 0;
    length[1] = xot.length;

    for (i in xot) {
        xot[i].multiplying(arr, xot);
    }

    //stat = [Wolf,Grass,Brownbear,Cow,Died_Wolfs,Eated_Grass,Died_Brownbears,Died_Cows]
    stat.Wolf = gayl.length;
    stat.Grass = xot.length;
    stat.Brownbear = arj.length;
    stat.Cow = kov.length;

    //statistics calculation
    if (gayl.length < length[0]) {
        stat.Died_Wolfs += length[0] - gayl.length;
        length[0] = gayl.length;
    }
    else if (gayl.length > length[0]) {
        stat.Added_Wolfs += gayl.length - length[0];
        length[0] = gayl.length;
    }
    if (xot.length < length[1]) {
        stat.Eated_Grass += length[1] - xot.length;
        length[1] = xot.length;
    }
    else if (xot.length > length[1]) {
        stat.Added_Grass += xot.length - length[1];
        length[1] = xot.length;
    }
    if (arj.length < length[2]) {
        stat.Died_Brownbears += length[2] - arj.length;
        length[2] = arj.length;
    }
    else if (arj.length > length[2]) {
        stat.Added_Brownbears += arj.length - length[2];
        length[2] = arj.length;
    }
    if (kov.length < length[3]) {
        stat.Died_Cows += length[3] - kov.length;
        length[3] = kov.length;
    }
    else if (kov.length > length[3]) {
        stat.Added_Cows += kov.length - length[3];
        length[3] = kov.length;
    }
    //Statistics calculation (end)

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

