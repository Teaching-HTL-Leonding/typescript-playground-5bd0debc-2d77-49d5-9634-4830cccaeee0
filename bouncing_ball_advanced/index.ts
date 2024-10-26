let bx: number = 0;
let by: number = 0;

let dx: number = 1;
let dy: number = 1;

let rad: number = 50;

let hs: number = 0;

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
  fill("white");
  stroke("black");
  text(`Score: ${hs}`, 10, height - 10);

  bx = bx + dx;
  by = by + dy;

  if (by > height - rad) {
    dy = dy * -1;
  }
  else if (by < 0) {
    dy = dy * -1;
  }
  else if (bx > width - rad) {
    dx = dx * -1;
  }
  else if (bx < 0) {
    dx = dx * -1;
  }
}

function mouseClicked() {
  if (mouseX > bx && mouseX < bx + rad && mouseY > by && mouseY < by + rad) {
    // 1. punkte erhoehen
    hs++;
    // 2. rechteck kleiner machen
    rad--;
    // 3. geschwindigkeit erhoehen

    if(dx > 0){
      dx++;
    }
    else{
      dx--;
    }
    if(dy > 0){
      dy++;
    }
    else{
      dy--;
    }

  }

}