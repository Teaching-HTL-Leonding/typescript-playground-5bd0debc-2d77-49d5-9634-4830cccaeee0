let bx: number = 0;
let by: number = 0;

let dx: number = 1;
let dy: number = 1;

const rad: number = 50;

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
  rect(bx, by, rad, rad);

  bx = bx + dx;
  by = by + dy;

  if (by > height - rad) {
    dy = -1;
  }
  else if (by < 0) {
    dy = + 1;
  }
  else if(bx > width - rad){
    dx = -1;
  }
  else if(bx <0){
    dx = +1
  }
}

function mouseClicked(){


}