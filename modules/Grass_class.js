var LivingCreature = require("./LivingCreature");

module.exports = class Grass extends LivingCreature{
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