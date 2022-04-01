var socket = io();

// var matrix_value = 30;
var side = 25

function setup()
{
  //generator();
  //WaterGenerator();
  createCanvas(25 * side, 25 * side);
}

function drawMatrix(matrix) {

  for (var y = 0; y < matrix[0].length; y++) 
  {
    for (var x = 0; x < matrix[y].length; x++) 
    {
      if (matrix[y][x] == 1) 
      {
        fill("green");
      } 
      else if (matrix[y][x] == 2) 
      {
        fill("yellow");
      } 
      else if (matrix[y][x] == 3) 
      {
        fill("black");
      } 
      else if (matrix[y][x] == 4) 
      {
        fill("red");
      } 
      else if (matrix[y][x] == 5) 
      {
        //let randomJur = Math.floor(rand(0, 100))
        //if (randomJur == 5)
        //{
          fill("blue");
        //}
        //else fill("green"); 
      } 
       else if (matrix[y][x] == 6) 
      {
        fill("green");
      } 
      else 
      {
        fill("grey");
      }
      rect(x * side, y * side, side, side);
    }
  }

}

function kill() {
  socket.emit("kill")
}
function addGrass() {
  socket.emit("add grass")
}
function addGrassEater() {
  socket.emit("add grassEater")
}



socket.on('send matrix', drawMatrix)

