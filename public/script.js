var W = 50;
var H = 60;
var side = 10;

function setup() {
    frameRate(10);
    createCanvas(W * side, H * side);
    background('#acacac');
}

function draw() {
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

} 
