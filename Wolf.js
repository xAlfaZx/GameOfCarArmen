let LeavingCreator = require("./LeavingCreator");
module.exports = class Wolf extends LeavingCreator {
    // chooseCharacter(character) {
  //   this.GetNewCoordinates();
  //   var found = [];
  //   for (var i in this.directions) {
  //     var x = this.directions[i][0];
  //     var y = this.directions[i][1];
  //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
  //       if (matrix[y][x] == character) {
  //         found.push(this.directions[i]);
  //       }
  //     }
  //   }
  //   return found;
  // }

  mul() {

    let urishpop20 = this.chooseCharacter(0);
    var newChar20 = urishpop20[Math.floor(Math.random() * urishpop20.length)];
    //let newChar20 = random(this.chooseCharacter(0)); // azat taracq
    //let newChar24 = random(this.chooseCharacter(4)); // wolf

    if (newChar20 /*&& newChar24*/) {
      var newWolf = new Wolf(newChar20[0], newChar20[1]);
      WolfArr.push(newWolf);
      matrix[newChar20[1]][newChar20[0]] = 4;
      this.energy = 5;
    }
  }

  eat() {
    //var urishpop20 = this.chooseCharacter(0);
    //var newCell20 = urishpop20[Math.floor(Math.random() * urishpop20.length)];


    let urishpop21 = this.chooseCharacter(1);
    let urishpop22 = this.chooseCharacter(2);
    let urishpop23 = this.chooseCharacter(3);

    var newEat21 = urishpop21[Math.floor(Math.random() * urishpop21.length)];
    var newEat22 = urishpop22[Math.floor(Math.random() * urishpop22.length)];
    var newEat23 = urishpop23[Math.floor(Math.random() * urishpop23.length)];


    //var newEat21 = random(this.chooseCharacter(1)); // xoter
    //var newEat22 = random(this.chooseCharacter(2)); // xotaker
    //var newEat23 = random(this.chooseCharacter(3)); // tunavor xot

    if (newEat22)
    {
      this.energy += 2;
      matrix[this.y][this.x] = 0;
      this.x = newEat22[0];
      this.y = newEat22[1];
      matrix[this.y][this.x] = 4;
      for (var i in eaterArr)
      {
        if (eaterArr[i].y == this.y && eaterArr[i].x == this.x)
        {
          eaterArr.splice(i, 1);
          break;
        }
      }
      if (this.energy == 50)
      {
        this.energy = 5;
        this.mul();
      }
    }
    else if (newEat23)
    {
      matrix[this.y][this.x] = 0;
      this.x = newEat23[0];
      this.y = newEat23[1];
      matrix[this.y][this.x] = 4;
      this.die();
      for (var i in toxicGrassArr)
      {
        if (toxicGrassArr[i].y == this.y && toxicGrassArr[i].x == this.x)
        {
          toxicGrassArr.splice(i, 1);
          break;
        }
      }
    }
    else if (newEat21)
    {
      this.energy++;
      matrix[this.y][this.x] = 0;
      this.x = newEat21[0];
      this.y = newEat21[1];
      matrix[this.y][this.x] = 4;
      for (var i in grassArr)
      {
        if (grassArr[i].y == this.y && grassArr[i].x == this.x)
        {
          grassArr.splice(i, 1);
          break;
        }
      }
      if (this.energy == 50)
      {
        this.energy = 5;
        this.mul();
      }
    }

    else
    {
      this.move();

      if (this.energy <= 0)
      {
        this.die();
      }
    }
  }

  move() {
    let urishpop24 = this.chooseCharacter(4);
    var newMove2 = urishpop24[Math.floor(Math.random() * urishpop24.length)];
    //var newMove2 = random(this.chooseCharacter(0));
    this.energy--;

    if (this.energy > 0 && newMove2) {
      matrix[this.y][this.x] = 0;
      this.x = newMove2[0];
      this.y = newMove2[1];
      matrix[this.y][this.x] = 4;
    }
  }

  die() {
    for (let i = 0; i < WolfArr.length; i++) {
      if (WolfArr[i].x == this.x && WolfArr[i].y == this.y) {
        WolfArr.splice(i, 1);
      }
    }
    matrix[this.y][this.x] = 0;
  }
};
