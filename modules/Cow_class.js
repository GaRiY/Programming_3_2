var LivingCreature = require("./LivingCreature");

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



    yntrelVandak(ind) {
        this.getNewCoordinates();
        super.yntrelVandak(ind);
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