var LivingCreature = require("./LivingCreature");

module.exports = class Grass extends LivingCreature{
    multiplying(arr,xot,stat) {
        this.mul++;
        if (this.mul >= 8) {
            this.mul = 0;
            this.yntrelVandak(0,arr);
            if (this.can.length != 0) {
                var newgr = this.can[Math.floor(Math.random()* this.can.length)];
                var x = newgr[0];
                var y = newgr[1];
                arr[y][x] = 1;
                stat.Added_Grass++;
                xot.push(new Grass(x, y, 1));
            }
        }
    }
}