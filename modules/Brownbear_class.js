var LivingCreature = require("./LivingCreature");

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

    move(i,arr,arj,stat) {
        if (this.ttd <= 0) {
            this.kill(i,arj,arr,stat);
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


    eat(i,arr,xot,kov,gayl,arj,stat) {
        this.yntrelVandak(3,arr);
        if (this.can.length != 0) {
            var newgy = this.can[Math.floor(Math.random()* this.can.length)];
            var x = newgy[0];
            var y = newgy[1];
            arr[y][x] = 4;
            for (var i in gayl) {
                if (gayl[i].x == x && gayl[i].y == y) {
                    gayl.splice(i, 1);
                    stat.Died_Wolfs++;
                }
            }
            arr[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            if (this.ttd < 30) {
                this.ttd += 5;
            }

            this.multiplying(arr,arj,stat);
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
                        stat.Died_Cows++;
                    }
                }
                arr[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                if (this.ttd < 10) {
                    this.ttd += 3;
                }

                this.multiplying(arr,arj,stat);
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
                            stat.Eated_Grass++;
                        }
                    }
                    arr[this.y][this.x] = 0;
                    this.x = x;
                    this.y = y;
                    if (this.ttd < 10) {
                        this.ttd += 1;
                    }

                    this.multiplying(arr,arj,stat);
                }
                else {
                    this.move(i,arr,arj,stat);
                }
            }
        }
    }

    kill(i,arj,arr,stat) {
        arr[this.y][this.x] = 0
        stat.Died_Brownbears++;
        arj.splice(i, 1);
    }

    multiplying(arr,arj,stat) {
        this.mul++;
        this.yntrelVandak(3,arr);
        if (this.can.length != 0) {
            for (var i in arj) {
                for (var i in this.can) {
                    var x = this.can[i][0];
                    var y = this.can[i][1];
                    if (arj[i].x == x && arj[i].y == y && arj[i].gender != this.gender) {
                        if (this.mul >= 5) {
                            var newaj = this.can[Math.floor(Math.random()* this.can.length)];
                            var x = newaj[0];
                            var y = newaj[1];
                            arr[y][x] = 4;
                            arj.push(new Brownbear(x, y, 4));
                            stat.Added_Brownbears++;
                            this.mul = 0;
                        }
                    }
                }
            }
        }
    }
}