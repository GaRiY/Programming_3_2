var LivingCreature = require("./LivingCreature");
var needToMul;

module.exports = class Wolf extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.gender = function () { var varForRandomNumber = Math.floor(Math.random() * 10); if (varForRandomNumber > 5) { return "male" } else { return "female" } };
        this.goa = 0;
        this.ttd = 10;


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

    yntrelVandak(ind, arr) {
        this.getNewCoordinates();
        super.yntrelVandak(ind, arr);
    }

    move(i, arr, gayl, stat) {
        if (this.ttd <= 0) {
            this.kill(i, gayl, arr, stat);
        }
        else {
            this.yntrelVandak(0, arr);

            if (this.can.length != 0) {
                var newgy = this.can[Math.floor(Math.random() * this.can.length)];
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
                this.yntrelVandak(1, arr);

                if (this.can.length != 0) {
                    var newgy = this.can[Math.floor(Math.random() * this.can.length)];
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


    eat(i, arr, kov, gayl, stat, currentSeason) {
        this.yntrelVandak(2, arr);
        if (this.can.length != 0) {
            var newgy = this.can[Math.floor(Math.random() * this.can.length)];
            var x = newgy[0];
            var y = newgy[1];
            arr[y][x] = 3;
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
                this.ttd += 2;
            }

            this.multiplying(arr, gayl, stat, currentSeason);
        }
        else {
            this.move(i, arr, gayl, stat);
        }
    }

    kill(i, gayl, arr, stat) {
        arr[this.y][this.x] = this.goa;
        stat.Died_Wolfs++;
        gayl.splice(i, 1);
    }

    multiplying(arr, gayl, stat, currentSeason) {
        if (currentSeason == "Summer") {
            needToMul = 5 / 2;
        }
        else if(currentSeason == "Winter"){
            needToMul = 5 * 2;
        }
        else {
            needToMul = 5;
        }
        this.mul++;
        this.yntrelVandak(3, arr);
        if (this.can.length != 0) {
            for (var i in gayl) {
                for (var i in this.can) {
                    var x = this.can[i][0];
                    var y = this.can[i][1];
                    if (gayl[i].x == x && gayl[i].y == y && gayl[i].gender != this.gender) {
                        if (this.mul >= needToMul) {
                            var newgy = this.can[Math.floor(Math.random() * this.can.length)];
                            var x = newgy[0];
                            var y = newgy[1];
                            arr[y][x] = 3;
                            stat.Added_Wolfs++;
                            gayl.push(new Wolf(x, y, 3));
                            this.mul = 0;

                        }
                    }
                }
            }
        }
    }
}