const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);

  // <<< Add code here
  addRandomCirlces()
}

function draw() {
  background("black");

  strokeWeight(3)
  stroke("green")
  noFill()
  for(let i = 0; i < circles_x.length; i++) {
    circle(circles_x[i], circles_y[i], circles_diameter[i])
  }

  // <<< Add code here
}
function addRandomCirlces() {
  circles_x.push(random(width))
  circles_y.push(random(height))
  circles_diameter.push(random(10, 50))
}
// <<< Add functions here
