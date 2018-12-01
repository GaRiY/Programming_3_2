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