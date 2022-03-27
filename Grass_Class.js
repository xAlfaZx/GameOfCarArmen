let LeavingCreator = require('./LeavingCreator')
module.exports = class Grass extends LeavingCreator {
  mul() {
    this.GodeMode();
    this.energy++;

    let urishpop = this.chooseCell(0);
    var newCell = urishpop[Math.floor(Math.random() * urishpop.length)];
    if (this.energy >= 3 && newCell) {
      const newGrass = new Grass(newCell[0], newCell[1]);
      grassArr.push(newGrass);
      matrix[newCell[1]][newCell[0]] = 1;
      this.energy = 0;
    }
  }

  GodeMode() {
    let urishpop25 = this.chooseCell(5);
    var WaterCord = urishpop25[Math.floor(Math.random() * urishpop25.length)];
    //var WaterCord = random(this.chooseCell(5));

    if (WaterCord) {
      matrix[this.y][this.x] = 6;
    }
  }
}
