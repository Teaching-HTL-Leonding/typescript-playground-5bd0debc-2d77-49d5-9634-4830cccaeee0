function setup() {
  createCanvas(300, 200);
}

const circleDiameter = 50;

let circleCenterX = 0;
let direction = 2;
let circleCenterY = 0;

// Remember: The _draw_ method is called FOR EVERY FRAME
function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, height / 2, circleDiameter);

  circleCenterX += direction;

  //                         +----------------------------- OR operator
  //                         |
  //                         v
  if (circleCenterX >= width || circleCenterX <= 0) {
    // Reverse sign of direction (positive -> right, negative -> left)
    direction *= -1; 
  }

  fill("skyblue");
  circle(width / 2, circleCenterY, circleDiameter);

  circleCenterY += direction

  if(circleCenterY >= 200 || circleCenterY <= height) {
    direction *= +1;
  }
}
