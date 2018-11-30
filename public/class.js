class Grass {
    constructor(x, y, index) {
        this.mul = 0;
        this.can = [];
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    yntrelVandak(ind) {
        this.can = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < arr[0].length && y >= 0 && y < arr.length) {
                if (arr[y][x] == ind) {
                    this.can.push([x, y]);
                }
            }
        }
    }

    multiplying() {
        this.mul++;
        if (this.mul >= 8) {
            this.mul = 0;
            this.yntrelVandak(0);
            if (this.can.length != 0) {
                var newgr = random(this.can);
                var x = newgr[0];
                var y = newgr[1];
                arr[y][x] = 1;
                xot.push(new Grass(x, y, 1));

            }
        }
    }

}

class Cow {
    constructor(x, y, index) {
        this.can = [];
        this.ttd = 5;
        this.mul = 0;
        this.x = x;
        this.y = y;
        this.index = index;


    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    yntrelVandak(ind) {
        this.getNewCoordinates();
        this.can = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < arr[0].length && y >= 0 && y < arr.length) {
                if (arr[y][x] == ind) {
                    this.can.push([x, y]);
                }
            }
        }
    }

    move(i) {
        if (this.ttd <= 0) {
            this.kill(i);
        }
        else {
            this.yntrelVandak(0);

            if (this.can.length != 0) {
                var newcw = random(this.can);
                var x = newcw[0];
                var y = newcw[1];
                arr[y][x] = 2;
                arr[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                this.ttd--;
            }
        }
    }



    eat(i) {
        this.yntrelVandak(1);
        if (this.can.length != 0) {
            var newcw = random(this.can);
            var x = newcw[0];
            var y = newcw[1];
            arr[y][x] = 2;
            for (var i in xot) {
                if (xot[i].x == x && xot[i].y == y) {
                    xot.splice(i, 1);
                }
            }
            arr[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            if (this.ttd < 3) {
                this.ttd++;
            }

            this.multiplying();
        }
        else {
            this.move(i);
        }
    }

    kill(i) {
        arr[this.y][this.x] = 0;
        kov.splice(i, 1);
    }

    multiplying() {
        this.mul++;
        this.yntrelVandak(0);
        if (this.mul >= 3) {
            var newcw = random(this.can);
            var x = newcw[0];
            var y = newcw[1];
            arr[y][x] = 2;
            kov.push(new Cow(x, y, 2));
            this.mul = 0;

        }
    }
}

class Wolf {
    constructor(x, y, index) {
        this.genarr = ["male", "female"];
        this.gender = random(this.genarr);
        this.mul = 0;
        this.goa = 0;
        this.can = [];
        this.ttd = 10;
        this.x = x;
        this.y = y;
        this.index = index;


    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }



    yntrelVandak(ind) {
        this.getNewCoordinates();
        this.can = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < arr[0].length && y >= 0 && y < arr.length) {
                if (arr[y][x] == ind) {
                    this.can.push([x, y]);
                }
            }
        }
    }

    move(i) {
        if (this.ttd <= 0) {
            this.kill(i);
        }
        else {
            this.yntrelVandak(0);

            if (this.can.length != 0) {
                var newgy = random(this.can);
                var x = newgy[0];
                var y = newgy[1];
                arr[y][x] = 3;
                arr[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                this.ttd--;
                this.goa = 0;
            }
            else {
                this.yntrelVandak(1);

                if (this.can.length != 0) {
                    var newgy = random(this.can);
                    var x = newgy[0];
                    var y = newgy[1];
                    arr[y][x] = 3;
                    arr[this.y][this.x] = 1;
                    this.x = x;
                    this.y = y;
                    this.ttd--;
                    this.goa = 1;
                }
            }
        }
    }


    eat(i) {
        this.yntrelVandak(2);
        if (this.can.length != 0) {
            var newgy = random(this.can);
            var x = newgy[0];
            var y = newgy[1];
            arr[y][x] = 3;
            for (var i in kov) {
                if (kov[i].x == x && kov[i].y == y) {
                    kov.splice(i, 1);
                }
            }
            arr[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            if (this.ttd < 10) {
                this.ttd += 2;
            }

            this.multiplying();
        }
        else {
            this.move(i);
        }
    }

    kill(i) {
        arr[this.y][this.x] = this.goa;
        gayl.splice(i, 1);
    }

    multiplying() {
        this.mul++;
        this.yntrelVandak(3);
        if (this.can.length != 0) {
            for (var i in gayl) {
                for (var i in this.can) {
                    var x = this.can[i][0];
                    var y = this.can[i][1];
                    if (gayl[i].x == x && gayl[i].y == y && gayl[i].gender != this.gender) {
                        if (this.mul >= 5) {
                            var newgy = random(this.can);
                            var x = newgy[0];
                            var y = newgy[1];
                            arr[y][x] = 2;
                            gayl.push(new Wolf(x, y, 3));
                            this.mul = 0;

                        }
                    }
                }
            }
        }
    }
}

class Brownbear {
    constructor(x, y, index) {
        this.genarr = ["male", "female"];
        this.gender = random(this.genarr);
        this.mul = 0;
        this.can = [];
        this.ttd = 30;
        this.x = x;
        this.y = y;
        this.index = index;


    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x + 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x, this.y + 3]
        ];
    }



    yntrelVandak(ind) {
        this.getNewCoordinates();
        this.can = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < arr[0].length && y >= 0 && y < arr.length) {
                if (arr[y][x] == ind) {
                    this.can.push([x, y]);
                }
            }
        }
    }

    move(i) {
        if (this.ttd <= 0) {
            this.kill(i);
        }
        else {
            this.yntrelVandak(0);

            if (this.can.length != 0) {
                var newgy = random(this.can);
                var x = newgy[0];
                var y = newgy[1];
                arr[y][x] = 4;
                arr[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                this.ttd--;
            }
        }
    }


    eat(i) {
        this.yntrelVandak(3);
        if (this.can.length != 0) {
            var newgy = random(this.can);
            var x = newgy[0];
            var y = newgy[1];
            arr[y][x] = 4;
            for (var i in gayl) {
                if (gayl[i].x == x && gayl[i].y == y) {
                    gayl.splice(i, 1);
                }
            }
            arr[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            if (this.ttd < 30) {
                this.ttd += 5;
            }

            this.multiplying();
        }
        else {
            this.yntrelVandak(2);
            if (this.can.length != 0) {
                var newgy = random(this.can);
                var x = newgy[0];
                var y = newgy[1];
                arr[y][x] = 4;
                for (var i in kov) {
                    if (kov[i].x == x && kov[i].y == y) {
                        kov.splice(i, 1);
                    }
                }
                arr[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                if (this.ttd < 10) {
                    this.ttd += 3;
                }

                this.multiplying();
            }
            else {
                this.yntrelVandak(1);

                if (this.can.length != 0) {
                    var newgy = random(this.can);
                    var x = newgy[0];
                    var y = newgy[1];
                    arr[y][x] = 4;
                    for (var i in xot) {
                        if (xot[i].x == x && xot[i].y == y) {
                            xot.splice(i, 1);
                        }
                    }
                    arr[this.y][this.x] = 0;
                    this.x = x;
                    this.y = y;
                    if (this.ttd < 10) {
                        this.ttd += 1;
                    }
                }
                else {
                    this.move(i);
                }
            }
        }
    }

    kill(i) {
        arr[this.y][this.x] = 0
        gayl.splice(i, 1);
    }

    multiplying() {
        this.mul++;
        this.yntrelVandak(3);
        if (this.can.length != 0) {
            for (var i in gayl) {
                for (var i in this.can) {
                    var x = this.can[i][0];
                    var y = this.can[i][1];
                    if (gayl[i].x == x && gayl[i].y == y && gayl[i].gender != this.gender) {
                        if (this.mul >= 5) {
                            var newgy = random(this.can);
                            var x = newgy[0];
                            var y = newgy[1];
                            arr[y][x] = 2;
                            gayl.push(new Wolf(x, y, 3));
                            this.mul = 0;

                        }
                    }
                }
            }
        }
    }
}

/*class Human {
    constructor() {
        this.can = [];
        this.x = 0;
        this.y = 0;
        this.index = 5;

    }

	getNewCoordinates(){
			this.directions = [
			[this.x - 1, this.y - 1],
			[this.x    , this.y - 1],
			[this.x + 1, this.y - 1],
    		[this.x - 1, this.y    ],
    		[this.x + 1, this.y    ],
    		[this.x - 1, this.y + 1],
    		[this.x    , this.y + 1],
    		[this.x + 1, this.y + 1]
	   ];
}


    findsiel(ind) {
        this.can = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < arr[0].length && y >= 0 && y < arr.length) {
			console.log(x,y);
                if (arr[y][x] == 0) {
                    this.can.push([x, y]);
                }
            }
        }
		if(this.can.length != 0){
        var idk = random(this.can);
		var x = idk[0];
		var y = idk[1];
        arr[y][x] = ind;
		return(idk);
		}
    }

    yntrelVandak(ind) {
        var x = Math.floor(random(W));
        var y = Math.floor(random(H));
        if (arr[y][x] == 0) {
            arr[y][x] = 5;
			arr[0][0] = 10;
			this.x = x;
			this.y = y;
			this.getNewCoordinates();
            var newcordfc = this.findsiel(ind);
			arr[y][x] = 0;
			return(newcordfc);
        }
    }

    check() {
        if (xot.length == 0) {
            var newcord = this.yntrelVandak(1);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0;
			xot.push(new Grass(x,y,1));
			}
			arr[0][0] = 5;
        }
        else if (kov.length == 0) {
            var newcord = this.yntrelVandak(2);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0;
			kov.push(new Cow(x,y,2));
			}
			arr[0][0] = 5;
        }
        else if (gayl.length <= 1) {
            var newcord = this.yntrelVandak(3);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0
			arr[y][x] = 3;
			gayl.push(new Wolf(x,y,3));
			}
			arr[0][0] = 5;
        }
        else if (arj.length <= 1) {
            var newcord = this.yntrelVandak(4);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0;
			arj.push(new Brownbear(x,y,4));
			}
			arr[0][0] = 5;
        }

    }
}*/