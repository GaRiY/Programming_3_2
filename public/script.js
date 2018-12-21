var W = 50;
var H = 60;
var side = 10;
var arr;
var fps = 0;
var bool = false;
var img;
var stat;

function setup() {
    frameRate(10);
    createCanvas(W * side + 650, 600);
    background('White');
    noLoop();
    img = loadImage("./bg.png");
}

function draw() {
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
            else if (arr[k][l] == 0) {
                fill("#acacac");
            }
            else if (arr[k][l] == 4) {
                fill("#935116");
            }
			else if (arr[k][l] == 5) {
                fill("#FFBF00");
            }
			else if (arr[k][l] == 10) {
				fill("#acacac");
			}
            var i = k * side;
            var o = l * side;
            rect(o, i, side, side);
        }
    }

}else{bool = true;}
    image(img,500,-40,img.length/1.2,img.height/1.2);
    fill("Red");
    rect(600, 100, side, side);
    text("Wolf: " + stat.Wolf + "(-" + stat.Died_Wolfs + ")" + "(+" + stat.Added_Wolfs + ")", 610 + side, 100 + side);
    fill("Green");
    rect(600, 130, side, side);
    text("Grass: " + stat.Grass + "(-" + stat.Eated_Grass + ")" + "(+" + stat.Added_Grass + ")", 610 + side, 130 + side);
    fill("#935116");
    rect(600, 160, side, side);
    text("Brownbear: " + stat.Brownbear + "(-" + stat.Died_Brownbears + ")" + "(+" + stat.Added_Brownbears + ")", 610 + side, 160 + side);
    fill("Yellow");
    rect(600, 190, side, side);
    text("Cow: " + stat.Cow + "(-" + stat.Died_Cows + ")" + "(+" + stat.Added_Cows + ")", 610 + side, 190 + side);
} 

function main() {
    socket = io();
	socket.on("matrix",function(data){
        arr = data[0];
        stat = data[1];//  [Wolf,Grass,Brownbear,Cow,Died_Wolfs,Eated_Grass,Died_Brownbears,Died_Cows]
        redraw();
    })
    fps = 10;
}
window.onload = main;
