var W = 50;
var H = 60;
var side = 10;
var arr;
var fps = 0;
var bool = false;
var img;
var stat;
var season;

function setup() {
    frameRate(10);
    createCanvas(W * side + 650, 600);
    background('White');
    noLoop();
    img = loadImage("./bg.png");
}

function draw() {
    stroke("Black");
    if(bool){
    for (var k = 0; k < arr.length; k++) {
        for (var l = 0; l < arr[k].length; l++) {
            if (arr[k][l] == 1) {
                fill("Green");
            }
            else if (arr[k][l] == 2) {
                fill("Yellow");
            }
            else if (arr[k][l] == 3) {
                fill("Red");
            }
            else if (arr[k][l] == 0 || arr[k][l] == 10) {
                fill("#acacac");
            }
            else if (arr[k][l] == 4) {
                fill("#935116");
            }
			else if (arr[k][l] == 5) {
                fill("#FFBF00");
            }
            var i = k * side;
            var o = l * side;
            rect(o, i, side, side);
        }
    }
    
}else{bool = true;}
    noStroke()
    image(img,520,0,img.width/3,600);
    fill("Red");//Red,#7B617D,#A97B77
    rect(550, 30, side, side);
    fill("#21ABE3");
    text("Wolf: " + stat.Wolf + "(-" + stat.Died_Wolfs + ")" + "(+" + stat.Added_Wolfs + ")", 560 + side, 30 + side);
    fill("Green");//Green,#1EB172,#33AB95
    rect(550, 60, side, side);
    fill("#21ABE3");
    text("Grass: " + stat.Grass + "(-" + stat.Eated_Grass + ")" + "(+" + stat.Added_Grass + ")", 560 + side, 60 + side);
    fill("#935116");//#935116,#567472,#837970
    rect(550, 90, side, side);
    fill("#21ABE3");
    text("Brownbear: " + stat.Brownbear + "(-" + stat.Died_Brownbears + ")" + "(+" + stat.Added_Brownbears + ")", 560 + side, 90 + side);
    fill("Yellow");//Yellow,#83BD72,#A1BE98
    rect(550, 120, side, side);
    fill("#21ABE3");
    text("Cow: " + stat.Cow + "(-" + stat.Died_Cows + ")" + "(+" + stat.Added_Cows + ")", 560 + side, 120 + side);
    fill("#2583fc");
    text(season,520,0);
} 

function main() {
    socket = io();
	socket.on("matrix",function(data){
        arr = data[0];
        stat = data[1];//  [Wolf,Grass,Brownbear,Cow,Died_Wolfs,Eated_Grass,Died_Brownbears,Died_Cows]
        season = data[2];
        redraw();
    })
    fps = 10;
}
window.onload = main;
