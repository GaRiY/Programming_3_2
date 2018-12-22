var LivingCreature = require("./LivingCreature");
var eated;

module.exports = class Cow extends LivingCreature {
    constructor(x, y, index) {

        super(x, y, index);

        this.ttd = 5;
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



    yntrelVandak(ind,arr) {
        this.getNewCoordinates();
        super.yntrelVandak(ind,arr);
    }

    move(i,arr,kov) {
        if (this.ttd <= 0) {
            this.kill(i,kov,arr);
        }
        else {
            this.yntrelVandak(0,arr);

            if (this.can.length != 0) {
                var newcw = this.can[Math.floor(Math.random()* this.can.length)];
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



    eat(i,arr,xot,kov) {
        this.yntrelVandak(1,arr);
        if (this.can.length != 0) {
            var newcw = this.can[Math.floor(Math.random()* this.can.length)];
            var x = newcw[0];
            var y = newcw[1];
            arr[y][x] = 2;
            for (var i in xot) {
                if (xot[i].x == x && xot[i].y == y) {
                    xot.splice(i, 1);
                    eated = "Grass";
                }
            }
            arr[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            if (this.ttd < 3) {
                this.ttd++;
            }

            this.multiplying(arr,kov);
        }
        else {
            this.move(i,arr,kov);
        }
    }

    kill(i,kov,arr) {
        arr[this.y][this.x] = 0;
        kov.splice(i, 1);
    }

    multiplying(arr,kov) {
        this.mul++;
        this.yntrelVandak(0,arr);
        if (this.mul >= 3) {
            var newcw = this.can[Math.floor(Math.random()* this.can.length)];
            var x = newcw[0];
            var y = newcw[1];
            arr[y][x] = 2;
            kov.push(new Cow(x, y, 2));
            this.mul = 0;
        }
        return eated;
    }
}