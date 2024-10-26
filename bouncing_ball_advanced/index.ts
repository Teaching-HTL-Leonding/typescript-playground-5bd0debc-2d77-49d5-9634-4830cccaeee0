let bx: number = 0;
let by: number = 0;

let dx: number = 1;
let dy: number = 1;

function setup() {
  createCanvas(300, 200);
  background("green");
  bx = width / 2;
  by = height / 2;
}

function draw() {
  background("green");
  fill("yellow");
  noStroke();
  circle(bx, by, 50);

  bx = bx + dx;
  by = by + dy;

  if (by > height) {
    dy = -1;
  }
  else if (by < 0) {
    dy = + 1;
  }
  else if(bx > width){
    dx = -1;
  }
  else if(bx <0){
    dx = +1
  }

}