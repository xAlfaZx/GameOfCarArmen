var socket = io();

// var matrix_value = 30;
var side = 50

function setup()
{
  //generator();
  //WaterGenerator();
  createCanvas(50 * side, 50 * side);
}

function drawMatrix(matrix) {
  for (var y = 0; y < matrix[0].length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
      } else if (matrix[y][x] == 2) {
        fill("yellow");
      } else if (matrix[y][x] == 3) {
        fill("black");
      } else if (matrix[y][x] == 4) {
        fill("red");
      } else if (matrix[y][x] == 5) {
        fill("blue");
       } else if (matrix[y][x] == 6) {
         fill("green");
      } else {
        fill("grey");
      }
      rect(x * side, y * side, side, side);
    }
  }

}
socket.on('send matrix', drawMatrix)

