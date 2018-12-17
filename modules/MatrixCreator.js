var arr = [];
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

arr[0][0] = 5;

module.exports = arr;