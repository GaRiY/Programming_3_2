var LivingCreature = require("./LivingCreature");
var eated;

module.exports = class Brownbear extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.gender = function(){var varForRandomNumber = Math.floor(Math.random()* 10);if(varForRandomNumber > 5){return "male"}else{return "female"}};
        this.ttd = 30;

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

    yntrelVandak(ind,arr){
        this.getNewCoordinates();
        super.yntrelVandak(ind,arr);
    }

    move(i,arr,arj) {
        if (this.ttd <= 0) {
            this.kill(i,arj,arr);
        }
        else {
            this.yntrelVandak(0,arr);

            if (this.can.length != 0) {
                var newgy = this.can[Math.floor(Math.random()* this.can.length)];
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


    eat(i,arr,xot,kov,gayl,arj) {
        this.yntrelVandak(3,arr);
        if (this.can.length != 0) {
            var newgy = this.can[Math.floor(Math.random()* this.can.length)];
            var x = newgy[0];
            var y = newgy[1];
            arr[y][x] = 4;
            for (var i in gayl) {
                if (gayl[i].x == x && gayl[i].y == y) {
                    gayl.splice(i, 1);
                    eated = "Wolf";
                }
            }
            arr[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            if (this.ttd < 30) {
                this.ttd += 5;
            }

            this.multiplying(arr,arj);
        }
        else {
            this.yntrelVandak(2,arr);
            if (this.can.length != 0) {
                var newgy = this.can[Math.floor(Math.random()* this.can.length)];
                var x = newgy[0];
                var y = newgy[1];
                arr[y][x] = 4;
                for (var i in kov) {
                    if (kov[i].x == x && kov[i].y == y) {
                        kov.splice(i, 1);
                        eated = "Cow";
                    }
                }
                arr[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                if (this.ttd < 10) {
                    this.ttd += 3;
                }

                this.multiplying(arr,arj);
            }
            else {
                this.yntrelVandak(1,arr);

                if (this.can.length != 0) {
                    var newgy = this.can[Math.floor(Math.random()* this.can.length)];
                    var x = newgy[0];
                    var y = newgy[1];
                    arr[y][x] = 4;
                    for (var i in xot) {
                        if (xot[i].x == x && xot[i].y == y) {
                            xot.splice(i, 1);
                            eated = "Grass";
                        }
                    }
                    arr[this.y][this.x] = 0;
                    this.x = x;
                    this.y = y;
                    if (this.ttd < 10) {
                        this.ttd += 1;
                    }

                    this.multiplying(arr,arj);
                }
                else {
                    this.move(i,arr,arj);
                }
            }
        }
    }

    kill(i,arj,arr) {
        arr[this.y][this.x] = 0
        arj.splice(i, 1);
    }

    multiplying(arr,arj) {
        this.mul++;
        this.yntrelVandak(3,arr);
        if (this.can.length != 0) {
            for (var i in arj) {
                for (var i in this.can) {
                    var x = this.can[i][0];
                    var y = this.can[i][1];
                    if (arj[i].x == x && arj[i].y == y && arj[i].gender != this.gender) {
                        if (this.mul >= 5) {
                            var newgy = this.can[Math.floor(Math.random()* this.can.length)];
                            var x = newgy[0];
                            var y = newgy[1];
                            arr[y][x] = 2;
                            arj.push(new Wolf(x, y, 3));
                            this.mul = 0;
                        }
                    }
                }
            }
        }
        return eated;
    }
}