module.exports = class Human {
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

    yntrelVandak(ind,arr) {
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

    check(xot,kov,gayl,arj,arr) {
        if (xot.length == 0) {
            var newcord = this.yntrelVandak(1,arr);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0;
			var zang = [x,y,"Grass",5];
			return zang;
			}
        }
        else if (kov.length == 0) {
            var newcord = this.yntrelVandak(2,arr);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0;
			var zang = [x,y,"Cow",5];
			return zang;
			}
        }
        else if (gayl.length <= 1) {
            var newcord = this.yntrelVandak(3,arr);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0;
			console.log(gayl + ", length: " + gayl.length);
			var zang = [x,y,"Wolf",5];
			return zang;
			}
        }
        else if (arj.length <= 1) {
            var newcord = this.yntrelVandak(4,arr);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0;
			var zang = [x,y,"Brownbear",5];
			return zang;
			}
        }

    }
}