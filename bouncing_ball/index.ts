function setup() {
  createCanvas(300, 200);
}

const circleDiameter = 50;

let circleCenterX = 0;
let directionG = 2;
let circleCenterY = 0;
let directionB = 2;

// Remember: The _draw_ method is called FOR EVERY FRAME
function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, height / 2, circleDiameter);

  circleCenterX += directionG;

  //                         +----------------------------- OR operator
  //                         |
  //                         v
  if (circleCenterX >= width || circleCenterX <= 0) {
    // Reverse sign of direction (positive -> right, negative -> left)
    directionG *= -1;
  }

  fill("skyblue");
  circle(width / 2, circleCenterY, circleDiameter);

  circleCenterY += directionB

  if (circleCenterY >= 200 || circleCenterY <= 0) {
    directionB *= -1;
  }
}
